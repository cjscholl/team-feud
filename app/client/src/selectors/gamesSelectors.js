export const games = (state) => state.games;

export const gamesList = (state) => Object.values(games(state));
export const roundsPerGame = (gameId) => (state) => games(state)[gameId].rounds.length;
