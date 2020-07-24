import { Router, Request, Response } from 'express';
import { DBConfig, DBGameSession, GameSession } from '../types';
import { MySqlReadAction } from '../actions/MySqlReadAction';

export default class GameSessionsApi {
    dbConfig: DBConfig;
    constructor(dbConfig: () => DBConfig) {
        this.dbConfig = dbConfig();
    }
    wire(): Router {
        const router = Router()
        router.get('/', this._getGameSessions.bind(this))
        return router;
    }
    async _getGameSessions(req: Request, res: Response): Promise<void> {
        try {
            const GameSessions: Array<GameSession> = (await new MySqlReadAction<DBGameSession>(DBGameSession, DBGameSession.tableName, this.dbConfig).execute())
                .map((t: DBGameSession) => new GameSession(t));
            res.send(GameSessions);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    }
}