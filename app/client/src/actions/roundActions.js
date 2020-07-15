export const roundActionTypes = {
  ADD_ROUND_POINTS: 'ADD_ROUND_POINTS',
  SET_ROUND_POINTS: 'SET_ROUND_POINTS',
};

export const addToRoundPoints = (pointsToAdd) => ({
  type: roundActionTypes.ADD_ROUND_POINTS,
  payload: {
    pointsToAdd,
  },
});

export const setRoundPoints = (points) => ({
  type: roundActionTypes.SET_ROUND_POINTS,
  payload: {
    points,
  },
});
