
export class Answer {
    id: number;
    answer: string;
    points: number;
    constructor(input: { id: number, answer: string, points: number }) {
        this.id = input.id;
        this.answer = input.answer;
        this.points = input.points;
    }
}

export class Question {
    id: number;
    question: string;
    answers: Array<Answer>;
    constructor(input: { id: number, question: string, answers: Array<Answer> }) {
        this.id = input.id;
        this.question = input.question;
        this.answers = input.answers;
    }
}

export type Rounds = { [key: number]: Question }

export class Game {
    id: number;
    gameName: string;
    rounds: Rounds;
    constructor(input: { id: number, gameName: string, rounds: Rounds }) {
        this.id = input.id;
        this.gameName = input.gameName;
        this.rounds = input.rounds;
    }
}

export class Team {
    id: number;
    teamName: string;
    constructor(input: { id: number, teamName: string }) {
        this.id = input.id;
        this.teamName = input.teamName;
    }
}

export class GameSession {
    id: number;
    gameId: number;
    team1Id: number;
    team2Id: number;
    team1Points: number;
    team2Points: number;
    currentRound: number;
    constructor(input: { id: number, gameId: number, team1Id: number, team2Id: number, team1Points: number, team2Points: number, currentRound: number }) {
        this.id = input.id;
        this.gameId = input.gameId;
        this.team1Id = input.team1Id
        this.team2Id = input.team2Id;
        this.team1Points = input.team1Points;
        this.team2Points = input.team2Points;
        this.currentRound = input.currentRound;
    }
}