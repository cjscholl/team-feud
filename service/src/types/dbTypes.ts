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

export abstract class DBTable {
    static tableName: string;
}

export class DBGame extends DBTable {
    static tableName: string = 'games';
    id: number;
    gameName: string;
    constructor(input: { id: number, gameName: string }) {
        super();
        this.id = input.id;
        this.gameName = input.gameName;
    }
}

export class DBQuestion extends DBTable {
    static tableName: string = 'questions';
    id: number;
    gameId: number;
    question: string;
    constructor(input: { id: number, gameId: number, question: string }) {
        super();
        this.id = input.id;
        this.gameId = input.gameId;
        this.question = input.question;
    }
}

export class DBAnswer extends DBTable {
    static tableName: string = 'answers';
    id: number;
    questionId: number;
    answer: string;
    points: number;
    constructor(input: { id: number, questionId: number, answer: string, points: number }) {
        super()
        this.id = input.id;
        this.questionId = input.questionId;
        this.answer = input.answer;
        this.points = input.points;
    }
}