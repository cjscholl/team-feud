import React from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard/GameBoard';
import TeamInfo from './TeamInfo';

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
    <TeamContainer><TeamInfo teamId="1" teamNumber="1" teamName="Catelyn" teamScore={100} strikes={3} /></TeamContainer>
    <GameBoardContainer><GameBoard /></GameBoardContainer>
    <TeamContainer><TeamInfo teamId="1" teamNumber="1" teamName="Catelyn" teamScore={100} strikes={3} /></TeamContainer>
  </GameContainer>
);

export default Game;
