import express, { RequestHandler, Router } from "express";
import bunyan from "bunyan";
import { NewLoggerMiddleware } from "./middlewares/logger";
import MainRouter from "./routes";

export class DefaultAppConfig implements AppConfig {
	name: string = process.env.APP_NAME || "app";
	port: string = process.env.PORT || "3000";
	logger: any = bunyan.createLogger({
		name: this.name,
		serializers: bunyan.stdSerializers,
	});
	pgURI: string =
		process.env.PGURI ||
		"postgres://postgres:postgres@localhost:5432/postgres";
}

interface AppConfig {
	name: string;
	port: string;
	logger: any;
	pgURI: string;
}

interface IApp {
	config: AppConfig,
	app: express.Express,

	run(): void
}

class App implements IApp {
	config!: AppConfig;
	app: express.Express;

	constructor(config: AppConfig) {
		this.config = config;
		this.app = express();
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	registerMiddlewares(middleware: RequestHandler[]): void {
		middleware.forEach((m) => this.app.use(m));
	}

	registerRouter(router: Router): void {
		this.app.use("/", router);
	}

	run(): void {
		this.app.listen(this.config.port, () => {
			this.config.logger.info(`${this.config.name} listening on port ${this.config.port}`);
		});
	}
}


export const CreateApp = (config: AppConfig): App => {
	const app = new App(config);
	app.registerMiddlewares([
		NewLoggerMiddleware(config.logger),
	]);
	app.registerRouter(MainRouter);
	
	return app;
};
