import { OkPacket, } from 'mysql';

export type QueryResultRow = {
    [key: string]: string | number | boolean | null;
}
export type QueryResult = OkPacket | Array<QueryResultRow>;
export type DBConfig = {
    host: string;
    user: string;
    password?: string;
    database: string;
} 
