import { Router, Request, Response } from 'express';
import { DBConfig, Game } from '../types';
import { RetrieveGamesCoordinator } from '../coordinators/RetrieveGamesCoordiantor';

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
            const games: Array<Game> = await new RetrieveGamesCoordinator(this.dbConfig).execute();
            res.send(games);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    }
}