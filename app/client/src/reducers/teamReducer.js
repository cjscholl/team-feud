import { teamActionTypes, strikeActionTypes } from '../actions/teamActions';

const initialState = {
  1: {
    points: 0,
    strikes: 0,
  },
  2: {
    points: 0,
    strikes: 0,
  },

};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case teamActionTypes.ADD_TEAM_POINTS: {
      const { teamNumber } = payload;
      const teamState = state[teamNumber];
      const { pointsToAdd } = payload;
      return { ...state, [teamNumber]: { ...teamState, points: teamState.points + pointsToAdd } };
    }
    case teamActionTypes.SET_TEAM_POINTS: {
      const { teamNumber } = payload;
      const teamState = state[teamNumber];
      const { points } = payload;
      return { ...state, [teamNumber]: { ...teamState, points } };
    }
    case strikeActionTypes.ADD_STRIKE: {
      const { teamNumber } = payload;
      const teamState = state[teamNumber];
      return { ...state, [teamNumber]: { ...teamState, strikes: teamState.strikes + 1 } };
    }
    default: {
      return state;
    }
  }
};
