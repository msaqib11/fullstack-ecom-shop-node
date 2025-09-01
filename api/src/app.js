import express from 'express';
import routes from "./routes/index.js"
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import cors from 'cors';
import { CORS_ORIGIN } from './config/env.js';
import { webhookController } from './controllers/index.js';
import bodyparser from 'body-parser';
const app = express();
app.use(cors({
    origin : ["http://localhost:5174","http://localhostt:5173"]
}))

app.post("/webhooks",bodyparser.raw({type:"application/json"}),webhookController.stripeWebHook)
app.use(express.json());
app.use("/api/v1",routes)
app.use(errorHandler)   
export default app;
 