import "dotenv/config";

import { CreateApp } from "./app";
import { DefaultAppConfig } from "./app";

const config = new DefaultAppConfig();
const app = CreateApp(config);

app.run();