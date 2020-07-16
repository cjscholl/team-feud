import { dbProvider } from '../utils/dbProvider';
import { DBTable, DBConfig, QueryResultRow, Constructor } from "../types";

export class MySqlReadAction<T extends DBTable> {
    dbConfig: DBConfig
    TableClass: Constructor<T>
    tableName: string
    constructor(TableClass: Constructor<T>, tableName: string, dbConfig: DBConfig) {
        this.TableClass = TableClass;
        this.tableName = tableName;
        this.dbConfig = dbConfig;
    }
    _getquery(): string {
        return `select * from teamFeud.${this.tableName}`;
    }
    async execute():  Promise<Array<T>> {
        const results = await dbProvider<Array<QueryResultRow>>(this._getquery(), this.dbConfig);
        return results.map((r: QueryResultRow) => new this.TableClass(r));
    }
}