import { config } from 'dotenv';
import express, { json } from 'express';
import mainRouter from './api/routes/main.router.js';
import cookie from 'cookie-parser';
import cors from 'cors';
import { errorHandler } from './api/middlewares/globalErrorHandler.js';

config();

const app = express();

app.use(cors({
    origin: process.env.CORS_URLS ? process.env.CORS_URLS.split(',') : ['http://localhost:8000'],
    credentials:true
}));
app.use(json());
app.use(cookie());

app.use(mainRouter);

app.use(errorHandler)

export default app;