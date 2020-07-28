import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GameBoard from './GameBoard/GameBoard';
import TeamInfo from './TeamInfo';

const GameContainer = styled.div`
    display: flex; 
    height: calc(100% - 50px);
`;

const GameBoardContainer = styled.div`
  flex-grow: 1;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  padding: 10px;
`;

const TeamContainer = styled.div`
  width: 350px;
  height: 100%;
`;

export const Game = () => {
  const { gameId, roundId } = useParams();
  return (
    <GameContainer>
      <TeamContainer>
        <TeamInfo teamNumber={1} />
      </TeamContainer>
      <GameBoardContainer><GameBoard gameId={gameId} roundId={roundId} /></GameBoardContainer>
      <TeamContainer>
        <TeamInfo teamNumber={2} />
      </TeamContainer>
    </GameContainer>
  );
};

export default Game;
