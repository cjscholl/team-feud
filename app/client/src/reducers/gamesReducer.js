import { gamesActionTypes } from '../actions/gamesActions';

const initialState = {
  1: {
    gameName: 'Catelyn Team Feud',
    id: 1,
    rounds: {
      1: {
        question: 'This is question 1',
        answers: [
          { answer: 'Answer1', points: 23 },
          { answer: 'Answer2', points: 15 },
          { answer: 'Answer3', points: 12 },
          { answer: 'Answer4', points: 12 },
          { answer: 'Answer5', points: 12 },
          { answer: 'Answer6', points: 12 },

        ],
      },
      2: {
        question: 'This is question 2',
        answers: [
          { answer: 'Answer1', points: 23 },
          { answer: 'Answer2', points: 15 },
          { answer: 'Answer3', points: 12 },
        ],
      },
      3: {
        question: 'This is question 3',
        answers: [
          { answer: 'Answer1', points: 23 },
          { answer: 'Answer2', points: 15 },
          { answer: 'Answer3', points: 12 },
        ],
      },
    },
  },
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case gamesActionTypes.fetchGames: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
