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
    border: solid 2px #63D2FF;
    margin: 5px;
`;

export const AnswerBox = ({
  answerNumber, answer, points, updateRoundPoints,
}) => {
  const [isShowing, toggleIsShowing] = useState(false);

  const dispalyText = isShowing ? `${answer} - ${points}` : answerNumber;

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
