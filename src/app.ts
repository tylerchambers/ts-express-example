import express from "express";
import bunyan from "bunyan";
import { NewLoggerMiddleware } from "./middlewares/logger";
import Router from "./routes";

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

export const CreateApp = (config: AppConfig): express.Express => {
	const app = express();
	app.use(NewLoggerMiddleware(config.logger));
	app.use("/", Router);
    return app;
};
