export const teamOptionsActionTypes = {
  SAVE_TEAM: 'SAVE_TEAM',
};

export const saveTeam = (teamId, teamName, teamMembers) => ({
  type: teamOptionsActionTypes.SAVE_TEAM,
  payload: {
    teamId,
    teamName,
    teamMembers,
  },
});
