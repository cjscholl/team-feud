import { roundActionTypes } from '../actions/roundActions';

const initialState = {
  number: 1,
  points: 0,
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
    default: {
      return state;
    }
  }
};
