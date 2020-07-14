import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const Title = styled.h1'';

export const GameMenu = () => (
    <>
        <h1>Welcome to Team Feud</h1>
        <Link to="/start">Start Game</Link>
        <Link to="/create">Create Game</Link>
    </>
);

export default GameMenu;