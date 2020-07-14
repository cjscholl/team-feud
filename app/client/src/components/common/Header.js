import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    background: #001021;
    color: white;
    text-align: center;
    font-family: 'Rubik Mono One', sans-serif;    
    font-weight: 400;
    font-size: 40px;
    `
;

export const Header = () => <StyledHeader>TEAM FEUD</StyledHeader>

export default Header;