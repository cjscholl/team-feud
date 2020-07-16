import { Router, Request, Response } from 'express';
import { DBConfig, DBTeam, Team } from '../types';
import { MySqlReadAction } from '../actions/MySqlReadAction';

export default class TeamsApi {
    dbConfig: DBConfig;
    constructor(dbConfig: () => DBConfig) {
        this.dbConfig = dbConfig();
    }
    wire(): Router {
        const router = Router()
        router.get('/', this._getTeams.bind(this))
        return router;
    }
    async _getTeams(req: Request, res: Response): Promise<void> {
        try {
            const teams: Array<Team> = (await new MySqlReadAction<DBTeam>(DBTeam, DBTeam.tableName, this.dbConfig).execute())
                .map((t: DBTeam) => new Team(t));
            res.send(teams);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    }
}