import { DBConfig } from './types';

// Environments?
export const dbConfig: () => DBConfig = () => ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'teamFeud'
});