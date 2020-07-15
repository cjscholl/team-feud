import bodyParser from 'body-parser';
import express, { Express } from 'express';
import http from 'http';
import HealthApi from './api/HealthApi';

const basepath = '/api';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${basepath}/health`, new HealthApi().wire());

http.createServer(app).listen(8090, () => console.log('running on port 8090...'));