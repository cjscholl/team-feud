export const roundActionTypes = {
  ADD_ROUND_POINTS: 'ADD_ROUND_POINTS',
  SET_ROUND_POINTS: 'SET_ROUND_POINTS',
  SET_TEAM_IN_PLAY: 'SET_TEAM_IN_PLAY',
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

export const setTeamInPlay = (teamNumber) => ({
  type: roundActionTypes.SET_TEAM_IN_PLAY,
  payload: {
    teamNumber,
  },
});
