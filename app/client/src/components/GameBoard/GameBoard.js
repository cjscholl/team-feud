import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerBox from './AnswerBox';

const RoundHeader = styled.h2`
    color: blue;
    text-align: center;
`;

const AnswersContainer = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AnswerColumn = styled.div`
  width: 50%;
  padding-bottom: 18%;
  margin-bottom: 2%;
  align-items: center;
  text-align: center;
`;

export const generateAnswerBoxColumns = (answersList = [
  { answer: 'Answer1', points: 23 },
  { answer: 'Answer2', points: 15 },
  { answer: 'Answer3', points: 12 },
  { answer: 'Answer4', points: 12 },
  { answer: 'Answer5', points: 12 },
  { answer: 'Answer6', points: 12 },
  { answer: 'Answer7', points: 12 },

]) => {
  const columnOne = answersList.slice(0, 4);
  const columnTwo = answersList.slice(5);
  return (
    <>
      <AnswerColumn>
        {columnOne.map(({ answer, points }) => <AnswerBox answer={answer} points={points} />)}
      </AnswerColumn>
      <AnswerColumn>
        {columnTwo.map(({ answer, points }) => <AnswerBox answer={answer} points={points} />)}
      </AnswerColumn>
    </>
  );
};

export const GameBoard = ({ roundNumber = 1, answersList }) => (
  <>
    <RoundHeader>
      {`Round ${roundNumber}`}
    </RoundHeader>
    <AnswersContainer>
      {generateAnswerBoxColumns(answersList)}
    </AnswersContainer>
  </>
);

export default GameBoard;

GameBoard.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  answersList: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.string,
    points: PropTypes.points,
  })).isRequired,
};
