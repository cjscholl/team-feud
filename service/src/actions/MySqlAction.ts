import { dbProvider } from '../utils/dbProvider';
import { DBConfig } from '../types';

export abstract class MySqlAction<T> {
    dbConfig: DBConfig
    constructor(dbConfig: DBConfig) {
        this.dbConfig = dbConfig;
    }
    abstract _getQuery(): string
    execute(): Promise<T> {
       return dbProvider<T>(this._getQuery(), this.dbConfig);
    }
}