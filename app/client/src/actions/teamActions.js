export const teamActionTypes = {
  ADD_TEAM_POINTS: 'ADD_TEAM_POINTS',
  SET_TEAM_POINTS: 'SET_TEAM_POINTS',
};

export const strikeActionTypes = {
  ADD_STRIKE: 'ADD_STRIKE',
  CLEAR_STRIKES: 'CLEAR_STRIKES',
};

export const addStrike = (teamNumber) => ({
  type: strikeActionTypes.ADD_STRIKE,
  payload: {
    teamNumber,
  },
});

export const clearStrikes = () => ({
  type: strikeActionTypes.CLEAR_STRIKES,
});

export const addToTeamPoints = (teamNumber, pointsToAdd) => ({
  type: teamActionTypes.ADD_TEAM_POINTS,
  payload: {
    teamNumber,
    pointsToAdd,
  },
});

export const setTeamPoints = (teamNumber, points) => ({
  type: teamActionTypes.SET_TEAM_POINTS,
  payload: {
    teamNumber,
    points,
  },
});
