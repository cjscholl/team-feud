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

export const TeamInfo = ({
  teamId, teamName, teamScore, teamNumber, strikes = 0,
}) => (
  <StyledTeamInfo id={teamId}>
    <TeamHeader>{`Team ${teamNumber}: ${teamName}`}</TeamHeader>
    <PointsBox><TeamScore>{`${teamScore} Points`}</TeamScore></PointsBox>
    <StrikeHeader>Strikes</StrikeHeader>
    <StrikeContainer>
      {
        [...Array(strikes)].map(() => <Strike key={Math.random()}>X</Strike>)
      }
    </StrikeContainer>
  </StyledTeamInfo>
);

export default TeamInfo;

TeamInfo.propTypes = {
  teamName: PropTypes.string,
  teamId: PropTypes.string,
  teamScore: PropTypes.number,
  teamNumber: PropTypes.oneOf([1, 2]),
  strikes: PropTypes.number,
};
