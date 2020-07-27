import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  border: 2px solid #63326E;
  color: #63326E;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
  width: 100%;
  text-align: center;

  &:hover {
    background: #63326E;
    color: white;
  }
`;

const StyledGameMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameMenu = () => (
  <StyledGameMenu>
    <h1>Welcome to Team Feud</h1>
    <StyledLink to="/start">Start Game</StyledLink>
    <StyledLink to="/createGame">Create Game</StyledLink>
    <StyledLink to="/teams">Set up Teams</StyledLink>
  </StyledGameMenu>
);

export default GameMenu;
