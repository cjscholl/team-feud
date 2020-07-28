import { roundActionTypes } from '../actions/roundActions';

const initialState = {
  number: 1,
  points: 0,
  teamInPlay: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case roundActionTypes.ADD_ROUND_POINTS: {
      const { pointsToAdd } = payload;
      return { ...state, points: state.points + pointsToAdd };
    }
    case roundActionTypes.SET_ROUND_POINTS: {
      const { points } = payload;
      return { ...state, points };
    }
    case roundActionTypes.SET_TEAM_IN_PLAY: {
      const { teamNumber } = payload;
      return { ...state, teamInPlay: teamNumber };
    }
    default: {
      return state;
    }
  }
};
