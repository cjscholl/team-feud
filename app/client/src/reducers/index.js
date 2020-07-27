import { combineReducers } from 'redux';

import selectedGame from './selectedGameReducer';
import round from './roundReducer';
import teams from './teamReducer';
import teamOptions from './teamOptionsReducer';
import games from './gamesReducer';

export default combineReducers({
  selectedGame, round, teams, teamOptions, games,
});
