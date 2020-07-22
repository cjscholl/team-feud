import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './common/Button';
import { addToTeamPoints } from '../actions/teamActions';
import { setRoundPoints } from '../actions/roundActions';

const RoundContainer = styled.div`
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WinnerButtonsContainer = styled.h2`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const PointsBox = styled.div`
  background: white;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #172A3A;
  margin-top: 1rem;
`;

const WinnerOption = styled.h2`
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`;

const RoundPoints = styled.div`
  margin-top: 1rem;
  height: 50px;
  width: 150px;
  color: #8AEA92;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #172A3A;
`;

const TeamScore = styled.span`
    color: #63D2FF;
    font-size: 30px;
`;

export const RoundOver = ({
  roundPoints, team1Score, team2Score, onWinClick,
}) => {
  const history = useHistory();
  const { gameId, roundId } = useParams();

  const advanceRound = () => {
    const nextRound = parseInt(roundId, 10) + 1;
    setTimeout(() => {
      if (nextRound <= 3) history.push(`/game/${gameId}/${nextRound}`);
      else history.push('/game/winner');
    }, 1000);
  };

  const handleTeamOneWinClick = () => {
    onWinClick(1, roundPoints);
    advanceRound();
  };
  const handleTeamTwoWinClick = () => {
    onWinClick(2, roundPoints);
    advanceRound();
  };

  return (
    <>
      <RoundContainer>
        {`Round ${roundId} winner?`}
        <RoundPoints>{roundPoints}</RoundPoints>
      </RoundContainer>
      <WinnerButtonsContainer>
        <WinnerOption>
          <Button onClick={handleTeamOneWinClick}>Team 1</Button>
          <PointsBox><TeamScore>{team1Score}</TeamScore></PointsBox>
        </WinnerOption>
        <WinnerOption>
          <Button onClick={handleTeamTwoWinClick}>Team 2</Button>
          <PointsBox><TeamScore>{team2Score}</TeamScore></PointsBox>
        </WinnerOption>
      </WinnerButtonsContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  roundPoints: state.round.points,
  roundNumber: state.round.number,
  team1Score: state.teams['1'].points,
  team2Score: state.teams['2'].points,
});
const mapDispatchToProps = (dispatch) => ({
  onWinClick: (teamNumber, points) => {
    dispatch(addToTeamPoints(teamNumber, points));
    dispatch(setRoundPoints(0));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundOver);

RoundOver.propTypes = {
  roundPoints: PropTypes.number.isRequired,
  onWinClick: PropTypes.func,
  team1Score: PropTypes.number,
  team2Score: PropTypes.number,
};
