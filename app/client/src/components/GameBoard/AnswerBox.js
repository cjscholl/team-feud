import React, { useState } from 'react';
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

export const AnswerBox = ({ answerNumber, answer, points }) => {
  const [isShowing, toggleIsShowing] = useState(false);

  const dispalyText = isShowing ? `${answer} - ${points}` : answerNumber;

  const handleClick = () => toggleIsShowing(!isShowing);
  return (
    <AnswerBoxContainer onClick={handleClick}>{dispalyText}</AnswerBoxContainer>
  );
};

AnswerBox.propTypes = {
  answerNumber: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

export default AnswerBox;
