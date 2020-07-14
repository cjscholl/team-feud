import React, { useState } from 'react';
import styled from 'styled-components';
import { testData } from '../constants/testData';
import { useHistory } from 'react-router-dom';

const SelectionMenu = styled.ul`
    list-style: none;
`;

const SelectionItem = styled.li`
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    background-color: ${props => props.isSelected ? 'lightblue' : 'white'};
`;

export const StartMenu = () => {
    const history = useHistory()
    const [teams, setTeam] = useState({
        team1: '',
        team2: ''
    });
    const [selectedGameId, setSelectedGame] = useState(null);
    const handleTeamSelection = team => e => {
        setTeam({...teams, [team]: e.target.value});
    }
    const handleStartGame = () => {
        history.push(`/game/${selectedGameId}/round/1`)
    }
    return (
        <>
            <input placeholder="Team 1" onChange={handleTeamSelection('team1')}/>
            <input placeholder="Team 2" onChange={handleTeamSelection('team2')}/>
            <SelectionMenu>
                {testData.map(game => <SelectionItem isSelected={selectedGameId === game.id} onClick={() => setSelectedGame(game.id)}>{game.gameName}</SelectionItem>)}
            </SelectionMenu>
            <button onClick={handleStartGame}>Start!</button>
        </>
    )
}

export default StartMenu;