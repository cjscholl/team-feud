import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContent = styled.div`
    background: white;
    font-family: 'Oswald', sans-serif;  
    margin: 0px 100px;  
`;

export const Content = ({ children }) => <StyledContent>{children}</StyledContent>;

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
