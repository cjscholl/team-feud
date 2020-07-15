import React from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard/GameBoard';

const GameContainer = styled.div`
    display: flex; 
`;

const GameBoardContainer = styled.div`
  flex-grow: 1;
`;

const TeamContainer = styled.div`
  width: 200px;
`;

export const Game = () => (
  <GameContainer>
    <TeamContainer />
    <GameBoardContainer><GameBoard /></GameBoardContainer>
    <TeamContainer />
  </GameContainer>
);

export default Game;
