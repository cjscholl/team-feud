import { teamActionTypes } from '../actions/teamActions';

const initialState = {
  one: {
    points: 0,

  },
  two: {
    points: 0,
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
    default: {
      return state;
    }
  }
};
