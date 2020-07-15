import { MySqlAction } from './MySqlAction';
import { QueryResultRow, DBConfig } from '../types'

export abstract class MySqlReadAction extends MySqlAction<Array<QueryResultRow>> {
    constructor(dbConfig: DBConfig) {
        super(dbConfig);
    }
}