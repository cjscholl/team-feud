import { actionType } from '../actions/selectGameAction';

const initialState = null;

export default (state = initialState, action) => {
  if (action.type.includes(actionType(''))) {
    return action.payload.gameId;
  }
  return state;
};
