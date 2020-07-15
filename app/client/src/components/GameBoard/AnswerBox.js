import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AnswerBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-color: 63D2FF;
    border-style: solid;
    border-width: 2px;
    margin: 5px;
`;

export const AnswerBox = ({ answer, points }) => (
  <AnswerBoxContainer>{`${answer} - ${points}`}</AnswerBoxContainer>
);

export default AnswerBox;

AnswerBox.propTypes = {
  answer: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};
