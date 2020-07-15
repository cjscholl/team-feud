import { OkPacket } from 'mysql';
import { MySqlAction } from './MySqlAction';
import { DBConfig } from '../types'

export abstract class MySqlWriteAction extends MySqlAction<Array<OkPacket>> {
    constructor(dbConfig: DBConfig) {
        super(dbConfig);
    }
}