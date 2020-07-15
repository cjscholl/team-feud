import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerBox from './AnswerBox';
import { roundActions } from '../../actions/roundActions';

const RoundHeader = styled.h2`
  color: #8AEA92;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const RoundPoints = styled.div`
  height: 50px;
  width: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #172A3A;
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
  const columnOne = answersList.slice(0, 5);
  const columnTwo = answersList.slice(5);
  return (
    <>
      <AnswerColumn>
        {columnOne.map(
          ({ answer, points }, index) => (
            <AnswerBox key={answer} answerNumber={index + 1} answer={answer} points={points} />
          ),
        )}
      </AnswerColumn>
      <AnswerColumn>
        {columnTwo.map(
          ({ answer, points }, index) => (
            <AnswerBox key={answer} answerNumber={index + 6} answer={answer} points={points} />
          ),
        )}
      </AnswerColumn>
    </>
  );
};

export const GameBoard = ({
  roundNumber, roundPoints, answersList, updateRoundPoints,
}) => (
  <>
    <RoundHeader>
      {`Round ${roundNumber}`}
      <RoundPoints>{roundPoints}</RoundPoints>
    </RoundHeader>
    <AnswersContainer>
      {generateAnswerBoxColumns(answersList, updateRoundPoints)}
    </AnswersContainer>
  </>
);

const mapStateToProps = (state) => ({
  roundPoints: state.round.points,
  roundNumber: state.round.number,
});

export default connect(mapStateToProps)(GameBoard);

GameBoard.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  roundPoints: PropTypes.number.isRequired,
  updateRoundPoints: PropTypes.func,
  answersList: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.string,
    points: PropTypes.points,
  })).isRequired,
};
