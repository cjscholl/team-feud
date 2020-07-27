export const gamesActionTypes = {
  fetchGames: 'games/fetch',
  SET_SELECTED_GAME: 'SET_SELECTED_GAME',
};

export const fetchGames = () => ({
  type: gamesActionTypes.fetchGames,
});
