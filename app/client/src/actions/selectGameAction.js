export const actionType = (gameId) => `game/select/${gameId}`;

export const selectGameAction = (gameId) => ({ type: actionType(gameId), payload: { gameId } });
