export const actionType = (gameId) => `game/select/${gameId}`;

export default (gameId) => ({ type: actionType(gameId), payload: { gameId } });
