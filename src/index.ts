import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { port, hostName } from './config';
import echoController, { controller } from './controllers/echo';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(`/${controller}`, echoController);
app.listen(port, hostName, () => {
    console.log(`server is starting at`, { port, hostName });
});
