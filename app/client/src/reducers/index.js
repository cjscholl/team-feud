import { combineReducers } from 'redux';

import selectedGame from './selectedGameReducer';
import round from './roundReducer';
import team from './teamReducer';

export default combineReducers({ selectedGame, round, team });
