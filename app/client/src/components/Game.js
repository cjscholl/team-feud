import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GameBoard from './GameBoard/GameBoard';
import TeamInfo from './TeamInfo';
import { addToTeamPoints } from '../actions/teamActions';
import { setRoundPoints } from '../actions/roundActions';

const GameContainer = styled.div`
    display: flex; 
`;

const GameBoardContainer = styled.div`
  flex-grow: 1;
`;

const TeamContainer = styled.div`
  width: 200px;
`;

export const Game = ({
  roundPoints, team1Score, team2Score, onWinClick,
}) => {
  const handleTeamOneWinClick = () => onWinClick('one', roundPoints);
  const handleTeamTwoWinClick = () => onWinClick('two', roundPoints);
  return (
    <GameContainer>
      <TeamContainer><TeamInfo teamId="1" teamNumber="1" teamName="Catelyn" teamScore={team1Score} strikes={3} onWinClick={handleTeamOneWinClick} /></TeamContainer>
      <GameBoardContainer><GameBoard /></GameBoardContainer>
      <TeamContainer><TeamInfo teamId="1" teamNumber="1" teamName="Catelyn" teamScore={team2Score} strikes={3} onWinClick={handleTeamTwoWinClick} /></TeamContainer>
    </GameContainer>
  );
};

const mapStateToProps = (state) => ({
  roundPoints: state.round.points,
  team1Score: state.team.one.points,
  team2Score: state.team.two.points,
});

const mapDispatchToProps = (dispatch) => ({
  onWinClick: (teamNumber, points) => {
    dispatch(addToTeamPoints(teamNumber, points));
    dispatch(setRoundPoints(0));
  },
});

Game.propTypes = {
  roundPoints: PropTypes.number,
  team1Score: PropTypes.number,
  team2Score: PropTypes.number,
  onWinClick: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
