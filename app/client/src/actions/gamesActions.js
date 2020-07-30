export const gamesActionTypes = {
  fetchGames: 'games/fetch',
  RESET_GAME: 'RESET_GAME',
};

export const fetchGames = () => ({
  type: gamesActionTypes.fetchGames,
});
