import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerBox from './AnswerBox';
import Button from '../common/Button';

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
  justify-content: center;
`;

const AnswerColumn = styled.div`
  width: 50%;
  padding-bottom: 50px;
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

export const generateAnswerBoxColumns = (answersList) => {
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
      {answersList.length > 5 && (
      <AnswerColumn>
        {columnTwo.map(
          ({ answer, points }, index) => (
            <AnswerBox key={answer} answerNumber={index + 6} answer={answer} points={points} />
          ),
        )}
      </AnswerColumn>
      )}
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
    <RoundHeader>
      <Button>End Round</Button>
    </RoundHeader>
  </>
);

const mapStateToProps = (state, ownProps) => {
  const { gameId, roundId } = ownProps;
  return {
    roundPoints: state.round.points,
    roundNumber: state.round.number,
    answersList: state.games[gameId].rounds[roundId].answers,
  };
};

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
