import { Router, Request, Response } from 'express';
import { GetGamesAction } from '../actions/GetGamesAction';
import { DBConfig } from '../types';

export default class GamesApi {
    dbConfig: DBConfig;
    constructor(dbConfig: () => DBConfig) {
        this.dbConfig = dbConfig();
    }
    wire(): Router {
        const router = Router()
        router.get('/', this._getGames.bind(this))
        return router;
    }
    async _getGames(req: Request, res: Response): Promise<void> {
        try {
            const games = await new GetGamesAction(this.dbConfig).execute();
            res.send(games);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    }
}