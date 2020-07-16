
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