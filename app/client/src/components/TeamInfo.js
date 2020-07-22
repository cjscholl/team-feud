/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as teamActions from '../actions/teamActions';
import * as teamSelectors from '../selectors/teamSelectors';

const TeamHeader = styled.h2`
  color: #63326E;
  font-size: 30px;
`;

const PointsBox = styled.div`
  background: white;
  height: 150px;
  width: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #172A3A;
`;

const TeamScore = styled.span`
    color: #63D2FF;
    font-size: 30px;
`;

const StyledTeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StrikeHeader = styled.h2`
  color: #FF495C;
  font-size: 30px;
`;

const Strike = styled.span`
  color: #FF495C;
  font-size: 40px;
  padding: 5px;
`;

const StrikeContainer = styled.div`
  display: flex;
`;

const StrikeButton = styled.button`
  background-color: #FF495C;
  color: white;
  font-size: 20px;
  border: 3px solid #FF495C;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }
`;

export const TeamInfo = ({
  teamId, teamName, score, teamNumber, strikes = 0, addStrike,
}) => {
  const audio = useRef(null);
  const handleAddStrike = () => {
    // document.getElementById('audio').play();
    audio.current.play();
    addStrike(teamNumber);
  };
  return (
    <StyledTeamInfo id={teamId}>
      <TeamHeader>{`Team ${teamNumber}: ${teamName}`}</TeamHeader>
      <PointsBox><TeamScore>{`${score} Points`}</TeamScore></PointsBox>
      <StrikeHeader>Strikes</StrikeHeader>
      <StrikeButton onClick={handleAddStrike}>
        <audio
          id="audio"
          // crossOrigin="anonymous"
          ref={audio}
          src="/teamfeud/Buzzer.mp3"
          // onEnded={() => console.log('ended')}
        />
        Add Strike
      </StrikeButton>
      <StrikeContainer>
        {[...Array(strikes)].map(() => (
          <Strike key={Math.random()}>
            X
          </Strike>
        ))}
      </StrikeContainer>
    </StyledTeamInfo>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { teamNumber } = ownProps;
  return ({
    roundPoints: state.round.points,
    score: teamSelectors.scoreSelector(teamNumber)(state),
    strikes: teamSelectors.strikesSelector(teamNumber)(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  addStrike: (teamNumber) => {
    dispatch(teamActions.addStrike(teamNumber));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamInfo);

TeamInfo.propTypes = {
  teamName: PropTypes.string,
  teamId: PropTypes.string,
  score: PropTypes.number,
  teamNumber: PropTypes.oneOf([1, 2]),
  strikes: PropTypes.number,
  addStrike: PropTypes.func,
};
