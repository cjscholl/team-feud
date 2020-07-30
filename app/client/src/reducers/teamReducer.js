import { teamActionTypes, strikeActionTypes } from '../actions/teamActions';
import { gamesActionTypes } from '../actions/gamesActions';

const initialState = {
  1: {
    points: 0,
    strikes: 0,
    teamName: 'Blue',
    teamMembers: [
      'blue-team',
    ],
  },
  2: {
    points: 0,
    strikes: 0,
    teamName: 'Red',
    teamMembers: [
      'red-team',
    ],
  },

};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case teamActionTypes.ADD_TEAM_POINTS: {
      const { teamNumber } = payload;
      const teamState = state[teamNumber];
      const { pointsToAdd } = payload;
      return { ...state, [teamNumber]: { ...teamState, points: teamState.points + pointsToAdd } };
    }
    case teamActionTypes.SET_TEAM_POINTS: {
      const { teamNumber } = payload;
      const teamState = state[teamNumber];
      const { points } = payload;
      return { ...state, [teamNumber]: { ...teamState, points } };
    }
    case teamActionTypes.SET_SELECTED_TEAMS: {
      const { team1, team2 } = payload;
      return {
        1: { ...state[1], teamName: team1.teamName, teamMembers: team1.teamMembers },
        2: { ...state[2], teamName: team2.teamName, teamMembers: team2.teamMembers },
      };
    }
    case strikeActionTypes.ADD_STRIKE: {
      const { teamNumber } = payload;
      const teamState = state[teamNumber];
      return { ...state, [teamNumber]: { ...teamState, strikes: teamState.strikes + 1 } };
    }
    case strikeActionTypes.CLEAR_STRIKES: {
      const team1State = state['1'];
      const team2State = state['2'];
      return {
        ...state,
        1: {
          ...team1State, strikes: 0,
        },
        2: {
          ...team2State, strikes: 0,
        },
      };
    }
    case gamesActionTypes.RESET_GAME: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};
