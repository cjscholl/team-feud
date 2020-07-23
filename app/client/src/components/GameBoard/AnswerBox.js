import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addToRoundPoints } from '../../actions/roundActions';

const AnswerBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: solid 3px #63D2FF;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
`;

export const AnswerNumberText = styled.span`
  border-radius: 50%;
  background-color: #63D2FF;
  color: white;
  width: 30px;
`;

export const AnswerBox = ({
  answerNumber, answer, points, updateRoundPoints,
}) => {
  const [isShowing, toggleIsShowing] = useState(false);

  const dispalyText = isShowing ? `${answer} - ${points}` : <AnswerNumberText>{answerNumber}</AnswerNumberText>;

  const handleClick = () => {
    if (!isShowing) {
      toggleIsShowing(!isShowing);
      updateRoundPoints(points);
    }
  };
  return (
    <AnswerBoxContainer onClick={handleClick}>{dispalyText}</AnswerBoxContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateRoundPoints: (points) => dispatch(addToRoundPoints(points)),
});

AnswerBox.propTypes = {
  answerNumber: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  updateRoundPoints: PropTypes.func,
};

export default connect(undefined, mapDispatchToProps)(AnswerBox);
