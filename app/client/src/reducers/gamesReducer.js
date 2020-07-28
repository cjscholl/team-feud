import { gamesActionTypes } from '../actions/gamesActions';
import { testData as games } from '../constants/testData';

const initialState = games;

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case gamesActionTypes.fetchGames: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
