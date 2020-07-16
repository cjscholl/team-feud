import { DBConfig } from "../types";

export abstract class Coordinator<T> {
    dbConfig: DBConfig
    constructor(dbConfig: DBConfig) {
        this.dbConfig = dbConfig;
    }
    abstract async execute(): Promise<T>
}