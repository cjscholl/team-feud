import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerBox from './AnswerBox';
import Button from '../common/Button';
import Timer from './Timer';
import * as roundActions from '../../actions/roundActions';

const RoundContainer = styled.div`
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainer = styled.div`
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AnswersContainer = styled.div` 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AnswerColumn = styled.div`
  width: 50%;
  margin-bottom: 2%;
  align-items: center;
  text-align: center;
`;

const RoundPoints = styled.div`
  margin-top: 1rem;
  height: 50px;
  width: 150px;
  color: #8AEA92;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #bdbdbd;
`;

const RevealContainer = styled.div`
  background-color: #f7f4f4;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  transition: transform 2s;
  transform: ${(props) => (props.showQuestion ? 'rotateX(180deg)' : 'none')};
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: absolute;
  height: 50px;
  line-height: 45px;
  box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);

`;

const QuestionContainer = styled.div`
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #f7f4f4;
  font-size: 20px;
  width: 100%;
  transition: transform 2s;
  transform: ${(props) => (props.showQuestion ? 'none' : 'rotateX(180deg)')};
  backface-visibility: hidden;
  position: absolute;
  height: 50px;
  line-height: 45px;
  box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);

`;

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 14px 0 8px 0;
`;

const Arrow = styled.svg`
  fill: ${(props) => (props.left ? '#00B4D8' : '#EC5766')};
  margin: 20px;
  cursor: pointer;
`;

export const generateAnswerBoxColumns = (answersList) => {
  const columnOne = answersList.slice(0, 5);
  const columnTwo = answersList.slice(5);
  return (
    <>
      <AnswerColumn>
        {columnOne.map(
          ({ answer, points }, index) => (
            <AnswerBox
              key={answer}
              fiveOrUnder
              answerNumber={index + 1}
              answer={answer}
              points={points}
            />
          ),
        )}
      </AnswerColumn>
      {answersList.length > 5 && (
      <AnswerColumn>
        {columnTwo.map(
          ({ answer, points }, index) => (
            <AnswerBox
              key={answer}
              fiveOrUnder={false}
              answerNumber={index + 6}
              answer={answer}
              points={points}
            />
          ),
        )}
      </AnswerColumn>
      )}
    </>
  );
};

export const GameBoard = ({
  roundId, roundPoints, answersList, updateRoundPoints, question, setTeamInPlay,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [showQuestion, toggleQuestion] = useState(false);
  const handleRoundEndClick = () => { history.push(`${location.pathname}/over`); };
  const handleToggleQuestion = () => {
    toggleQuestion(true);
  };
  return (
    <>
      <RoundContainer>
        {`Round ${roundId}`}
        <RoundPoints>{roundPoints}</RoundPoints>
        <StyledDiv onClick={handleToggleQuestion}>
          <RevealContainer showQuestion={showQuestion}>Reveal Question</RevealContainer>
          <QuestionContainer showQuestion={showQuestion}>{question}</QuestionContainer>
        </StyledDiv>
      </RoundContainer>
      <AnswersContainer>
        {generateAnswerBoxColumns(answersList, updateRoundPoints)}
      </AnswersContainer>
      <FlexContainer>
        <Arrow onClick={() => setTeamInPlay(1)} left height="40" width="40">
          <polygon points="0,20 40,40 40,0" />
          Sorry, your browser does not support inline SVG.
        </Arrow>
        <RoundContainer>
          <Timer />
          <Button onClick={handleRoundEndClick}>End Round</Button>
        </RoundContainer>
        <Arrow onClick={() => setTeamInPlay(2)} height="40" width="40">
          <polygon points="0,40 40,20 0,0" />
          Sorry, your browser does not support inline SVG.
        </Arrow>
      </FlexContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { gameId, roundId } = ownProps;
  return {
    roundPoints: state.round.points,
    roundNumber: state.round.number,
    answersList: state.games[gameId].rounds[roundId - 1].answers,
    question: state.games[gameId].rounds[roundId - 1].question,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTeamInPlay: (points) => dispatch(roundActions.setTeamInPlay(points)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

GameBoard.propTypes = {
  roundId: PropTypes.number.isRequired,
  roundPoints: PropTypes.number.isRequired,
  updateRoundPoints: PropTypes.func,
  question: PropTypes.string,
  answersList: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.string,
    points: PropTypes.points,
  })).isRequired,
  setTeamInPlay: PropTypes.func,
};
