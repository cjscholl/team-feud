import { MySqlReadAction } from './MySqlReadAction';
import { DBConfig } from '../types'

export class GetGamesAction extends MySqlReadAction {
    constructor(dbConfig: DBConfig) {
        super(dbConfig);
    }
    _getQuery(): string {
        return 'select * from teamFeud.games';
    }
}