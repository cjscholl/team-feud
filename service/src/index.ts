import bodyParser from 'body-parser';
import express, { Express } from 'express';
import http from 'http';
import HealthApi from './api/HealthApi';
import GamesApi from './api/GamesApi';

import { dbConfig } from './dbConfig';
import GameSessionsApi from './api/GameSessionsApi';
import TeamsApi from './api/TeamsApi';

const basepath = '/api';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${basepath}/health`, new HealthApi().wire());
app.use(`${basepath}/games`, new GamesApi(dbConfig).wire());
app.use(`${basepath}/gamesessions`, new GameSessionsApi(dbConfig).wire());
app.use(`${basepath}/teams`, new TeamsApi(dbConfig).wire());

http.createServer(app).listen(8090, () => console.log('running on port 8090...'));