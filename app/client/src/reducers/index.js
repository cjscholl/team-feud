import { combineReducers } from 'redux';

import selectedGame from './selectedGameReducer';
import round from './roundReducer';
import team from './teamReducer';
import games from './gamesReducer';

export default combineReducers({
  selectedGame, round, team, games,
});
