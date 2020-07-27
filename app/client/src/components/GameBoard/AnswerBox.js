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
    border: solid 2px white;
    margin-right: ${(props) => (props.fiveOrUnder ? '5px' : '0')};
    margin-left: ${(props) => (props.fiveOrUnder ? '0' : '5px')};
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 2px 2px rgba(0,0,0,.06), 0 0 2px rgba(0,0,0,.07);
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
