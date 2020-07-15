import bodyParser from 'body-parser';
import express, { Express } from 'express';
import http from 'http';

const basepath = '/api';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.createServer(app).listen(8090, () => console.log('running on port 8090...'));