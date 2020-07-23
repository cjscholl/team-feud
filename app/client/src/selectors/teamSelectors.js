export const teams = (state) => state.teams;

export const teamsSelector = (teamNumber) => (state) => teams(state)[teamNumber];

export const strikesSelector = (teamNumber) => (state) => teamsSelector(teamNumber)(state).strikes;
export const scoreSelector = (teamNumber) => (state) => teamsSelector(teamNumber)(state).points;
export const teamName = (teamNumber) => (state) => teamsSelector(teamNumber)(state).teamName;
export const teamMembers = (teamNumber) => (state) => teamsSelector(teamNumber)(state).teamMembers;
