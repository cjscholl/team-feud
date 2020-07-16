import mysql from 'mysql';
import { DBConfig } from '../types';


export const dbProvider = <T>(query: string, dbConfig: DBConfig): Promise<T> => new Promise((resolve, reject) => {
    const connection: mysql.Connection = mysql.createConnection(dbConfig)
    connection.connect();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    connection.query(query, (error: mysql.MysqlError, results: any) => {
        if (error) {
            reject(error)
        }
        resolve(results);
    });
})

export default dbProvider;
