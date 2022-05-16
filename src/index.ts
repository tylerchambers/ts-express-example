import "dotenv/config";

import { CreateApp } from "./app";
import { DefaultAppConfig } from "./app";

const config = new DefaultAppConfig();
const app = CreateApp(config);

app.listen(
    config.port,
    () => console.log(`${config.name} listening on port ${config.port}`)
)