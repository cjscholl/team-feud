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

export class DBGameSession extends DBTable {
    static tableName: string = 'gameSessions';
    id: number;
    gameId: number;
    team1Id: number;
    team2Id: number;
    team1Points: number;
    team2Points: number;
    currentRound: number;
    constructor(input: { id: number, gameId: number, team1Id: number, team2Id: number, team1Points: number, team2Points: number, currentRound: number }) {
        super();
        this.id = input.id;
        this.gameId = input.gameId;
        this.team1Id = input.team1Id
        this.team2Id = input.team2Id;
        this.team1Points = input.team1Points;
        this.team2Points = input.team2Points;
        this.currentRound = input.currentRound;
    }
}

export class DBTeam extends DBTable {
    static tableName: string = 'teams';
    id: number;
    teamName: string;
    constructor(input: { id: number, teamName: string }) {
        super();
        this.id = input.id;
        this.teamName = input.teamName;
    }
}