/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as teamActions from '../actions/teamActions';
import * as teamSelectors from '../selectors/teamSelectors';
import * as roundSelectors from '../selectors/roundSelectors';

const TeamHeader = styled.h2`
  color: ${(props) => (props.teamNumber === 1 ? '#0077B6' : '#DA344D')};
  font-size: 30px;
  margin: 0;
`;

const PointsBox = styled.div`
  background: white;
  height: 50px;
  width: 300px;
  border-radius: 5px;
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
  background-color: ${(props) => {
    if (props.teamInPlay === 1 && props.teamNumber === 1) return '#CAF0F8';
    if (props.teamInPlay === 2 && props.teamNumber === 2) return '#eca8a6';
    return 'none';
  }};
  height: 100%;

`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TertiaryHeader = styled.h3`
  color: ${(props) => (props.teamNumber === 1 ? '#03045E' : '#a21c3b')};
  font-size: 20px;
  margin-bottom: 0px;
`;

const Strike = styled.span`
  color: red;
  font-size: 30px;
  padding: 0 5px;
`;

const StrikeContainer = styled.div`
  display: flex;
  border: 3px solid black;
  border-radius: 5px;
  width: 300px;
  background-color: white;
  height: 50px;
  justify-content: center;
`;

const StrikeButton = styled.button`
  background-color: ${(props) => (props.teamNumber === 1 ? '#00B4D8' : '#EC5766')};
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 150px;
  height: 50px;
  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }
  outline: none;
  margin-top: 30px;
  cursor: pointer;
`;

const TeamContainer = styled.div`
  border: 3px solid black;
  border-radius: 5px;
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  max-height: 220px;
`;

const TeamMember = styled.div`
  cursor: pointer;
  background-color: ${(props) => {
    if (props.selected && props.teamNumber === 1) return '#00B4D8';
    if (props.selected && props.teamNumber === 2) return '#EC5766';
    return 'none';
  }}
`;

export const TeamInfo = ({
  teamId, teamName, teamMembers, score, teamNumber, strikes = 0, addStrike, teamInPlay,
}) => {
  const [selectedMember, setSelectedMember] = useState('');
  const audio = useRef(null);
  const handleAddStrike = () => {
    audio.current.play();
    addStrike(teamNumber);
  };
  return (
    <StyledTeamInfo teamInPlay={teamInPlay} teamNumber={teamNumber} id={teamId}>
      <TeamHeader teamNumber={teamNumber}>{`Team ${teamNumber}: ${teamName}`}</TeamHeader>
      <LabelContainer>
        <TertiaryHeader teamNumber={teamNumber}>Team Members</TertiaryHeader>
        <TeamContainer>
          {teamMembers.map((member) => (
            <TeamMember
              teamNumber={teamNumber}
              selected={member === selectedMember}
              onClick={() => setSelectedMember(member)}
            >
              {member}
            </TeamMember>
          ))}
        </TeamContainer>
      </LabelContainer>
      <LabelContainer>
        <TertiaryHeader teamNumber={teamNumber}>Points</TertiaryHeader>
        <PointsBox><TeamScore>{score}</TeamScore></PointsBox>
      </LabelContainer>
      <LabelContainer>
        <TertiaryHeader teamNumber={teamNumber}>Strikes</TertiaryHeader>
        <StrikeContainer>
          {[...Array(strikes)].map(() => (
            <Strike key={Math.random()}>
              X
            </Strike>
          ))}
        </StrikeContainer>
      </LabelContainer>
      <StrikeButton teamNumber={teamNumber} onClick={handleAddStrike}>
        <audio
          id="audio"
          ref={audio}
          src="/teamfeud/Buzzer.mp3"
        />
        Add Strike
      </StrikeButton>
    </StyledTeamInfo>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { teamNumber } = ownProps;
  return ({
    roundPoints: state.round.points,
    score: teamSelectors.scoreSelector(teamNumber)(state),
    strikes: teamSelectors.strikesSelector(teamNumber)(state),
    teamName: teamSelectors.teamName(teamNumber)(state),
    teamMembers: teamSelectors.teamMembers(teamNumber)(state),
    teamInPlay: roundSelectors.teamInPlay(state),
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
  teamMembers: PropTypes.arrayOf(PropTypes.string),
  teamInPlay: PropTypes.oneOf([0, 1, 2]),
};
