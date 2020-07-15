import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Button = styled.button`
  font-family: 'Oswald','sans-serif';
  width: 100px;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: #63D2FF;
    color: white;
  &:hover {
    color: #63D2FF;
    background-color: white;
  }
  &:active {
    background-color: #63D2FF;
    color: white;
  }
  border: 2px solid #172A3A;
  font-size: 20px;
`;

export const TeamInfo = ({
  teamId, teamName, teamScore, teamNumber, strikes = 0, onWinClick,
}) => (
  <StyledTeamInfo id={teamId}>
    <TeamHeader>{`Team ${teamNumber}: ${teamName}`}</TeamHeader>
    <Button onClick={onWinClick}>Win</Button>
    <PointsBox><TeamScore>{`${teamScore} Points`}</TeamScore></PointsBox>
    <StrikeHeader>Strikes</StrikeHeader>
    <StrikeContainer>
      {
        [...Array(strikes)].map(() => <Strike>X</Strike>)
      }
    </StrikeContainer>
  </StyledTeamInfo>
);

export default TeamInfo;

TeamInfo.propTypes = {
  teamName: PropTypes.string,
  teamId: PropTypes.string,
  teamScore: PropTypes.number,
  teamNumber: PropTypes.number,
  strikes: PropTypes.number,
  onWinClick: PropTypes.func,
};
