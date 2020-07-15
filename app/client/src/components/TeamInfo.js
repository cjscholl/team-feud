import React from 'react';
import styled from 'styled-components';
import PropTypes, { string } from 'prop-types';

const TeamHeader = styled.h2`
    color: blue;
`;

const TeamScore = styled.h3``;

export const TeamInfo = ({ teamId, teamName, teamScore }) => (
  <div>
    <TeamHeader>{teamName}</TeamHeader>
    <TeamScore>{teamScore}</TeamScore>
  </div>
);

export default TeamInfo;

TeamInfo.propTypes = {
    teamName: PropTypes.string,
    teamId: PropTypes.string,
    teamScore: PropTypes.number
}