import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
    background: white;
    font-family: 'Oswald', sans-serif;  
    margin: 0px 100px;  
`;

export const Content = ({ children }) => <StyledContent>{children}</StyledContent>;

export default Content;
