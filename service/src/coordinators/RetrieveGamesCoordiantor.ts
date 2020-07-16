import _ from 'lodash';

import { DBTable, DBGame, DBQuestion, DBAnswer, Game, Question, Answer, Rounds } from '../types';
import { MySqlReadAction } from '../actions/MySqlReadAction';
import { DBConfig } from '../types';
import { Coordinator } from './Coordinator';

export class RetrieveGamesCoordinator extends Coordinator<Array<Game>> {
    constructor(dbConfig: DBConfig) {
        super(dbConfig);
    }
    async execute(): Promise<Array<Game>> {
        const [dbGames, dbQuestions, dbAnswers]: Array<Array<DBTable>> = await Promise.all([
            new MySqlReadAction<DBGame>(DBGame, DBGame.tableName, this.dbConfig).execute(),
            new MySqlReadAction<DBQuestion>(DBQuestion, DBQuestion.tableName, this.dbConfig).execute(),
            new MySqlReadAction<DBAnswer>(DBAnswer, DBAnswer.tableName, this.dbConfig).execute()
        ]);
        
        const games: Array<Game> = [];
        for (const dbGame of (dbGames as Array<DBGame>)) {
            const filteredQuestions = _.filter(dbQuestions as Array<DBQuestion>, { gameId: dbGame.id })
            const rounds: Rounds = {};
            for (const dbQuestion of filteredQuestions) {
                const filteredAnswers = _.filter(dbAnswers as Array<DBAnswer>, { questionId: dbQuestion.id });
                rounds[dbQuestion.id] = new Question({ ...dbQuestion, answers: filteredAnswers.map((fa: DBAnswer) => new Answer(fa))})
            }
            games.push(new Game({ ...dbGame, rounds }));
        }
        return games;
    }
}