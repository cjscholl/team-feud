export const teamActionTypes = {
  ADD_TEAM_POINTS: 'ADD_TEAM_POINTS',
  SET_TEAM_POINTS: 'SET_TEAM_POINTS',
};

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
