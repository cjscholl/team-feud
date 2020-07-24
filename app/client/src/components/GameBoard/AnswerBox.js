import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addToRoundPoints } from '../../actions/roundActions';

const AnswerBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: solid 3px black;
    margin-right: ${(props) => (props.fiveOrUnder ? '5px' : '0')};
    margin-left: ${(props) => (props.fiveOrUnder ? '0' : '5px')};
    margin-top: 5px;
    margin-bottom: 5px;
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
  answerNumber, answer, points, updateRoundPoints, fiveOrUnder,
}) => {
  const [isShowing, toggleIsShowing] = useState(false);

  const displayText = isShowing ? `${answer} - ${points}` : <AnswerNumberText>{answerNumber}</AnswerNumberText>;

  const handleClick = () => {
    if (!isShowing) {
      toggleIsShowing(!isShowing);
      updateRoundPoints(points);
    }
  };
  return (
    <AnswerBoxContainer
      fiveOrUnder={fiveOrUnder}
      onClick={handleClick}
    >
      {displayText}
    </AnswerBoxContainer>
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
  fiveOrUnder: PropTypes.bool,
};

export default connect(undefined, mapDispatchToProps)(AnswerBox);
