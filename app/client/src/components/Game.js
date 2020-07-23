import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  const { gameId, roundId } = useParams();
  const handleTeamOneWinClick = () => onWinClick('1', roundPoints);
  const handleTeamTwoWinClick = () => onWinClick('2', roundPoints);
  return (
    <GameContainer>
      <TeamContainer>
        <TeamInfo teamId="1" teamNumber={1} teamName="Catelyn" teamScore={team1Score} onWinClick={handleTeamOneWinClick} />
      </TeamContainer>
      <GameBoardContainer><GameBoard gameId={gameId} roundId={roundId} /></GameBoardContainer>
      <TeamContainer>
        <TeamInfo teamId="2" teamNumber={2} teamName="Catelyn" teamScore={team2Score} strikes={3} onWinClick={handleTeamTwoWinClick} />
      </TeamContainer>
    </GameContainer>
  );
};

const mapStateToProps = (state) => ({
  roundPoints: state.round.points,
  team1Score: state.teams['1'].points,
  team2Score: state.teams['2'].points,
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
