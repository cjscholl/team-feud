import React from 'react';
import styled from 'styled-components';

const TeamHeader = styled.h2`
    color: blue;
`;

const TeamScore = styled.h3``;

export const TeamInfo = ({teamId, teamName, teamScore}) => <div>
    <TeamHeader>{teamName}</TeamHeader>
    <TeamScore>{teamScore}</TeamScore>
</div>