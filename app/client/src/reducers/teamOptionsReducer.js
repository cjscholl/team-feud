import { teamOptionsActionTypes } from '../actions/teamOptionsActions';

const initialState = {
  1: {
    teamName: 'Red',
    teamMembers: [
      'Josh',
      'Catelyn',
      'Tom',
    ],
  },
  2: {
    teamName: 'Blue',
    teamMembers: [
      'Mark',
      'Marq',
      'Andrew',
    ],
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case teamOptionsActionTypes.SAVE_TEAM: {
      const { teamId, teamName, teamMembers } = payload;
      return { ...state, [teamId]: { teamName, teamMembers } };
    }
    default: {
      return state;
    }
  }
};
