import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { testData } from '../constants/testData';

const StartMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SelectionMenu = styled.ul`
    list-style: none;
    margin: 0;
`;

const SelectionItem = styled.li`
    cursor: pointer;
    border: 3px solid #11B5E4;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    font-family: 'Oswald', sans-serif;
    background-color: ${(props) => (props.isSelected ? '#11B5E4' : 'white')};
    color: ${(props) => (props.isSelected ? 'white' : '#11B5E4')};
    width: 800px;
    transition: box-shadow .3s;

    &:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
`;

const StartButton = styled.button`
    background-color: #53DD6C;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    color: white;
    padding: 20px;
    width: 200px;
    transition: box-shadow .3s;
    font-family: 'Oswald', sans-serif;

    &:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
    
`;

const StyledInput = styled.input`
    font-family: 'Oswald', sans-serif;
    border: 3px solid #FF4D80;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
`;

export const StartMenu = () => {
  const history = useHistory();
  const [teams, setTeam] = useState({
    team1: '',
    team2: '',
  });
  const [selectedGameId, setSelectedGame] = useState(null);
  const handleTeamSelection = (team) => (e) => {
    setTeam({ ...teams, [team]: e.target.value });
  };

  const handleStartGame = () => {
    history.push(`/game/${selectedGameId}/1`);
  };

  return (
    <StartMenuContainer>
      <StyledInput placeholder="Team 1" onChange={handleTeamSelection('team1')} />
      <StyledInput placeholder="Team 2" onChange={handleTeamSelection('team2')} />
      <SelectionMenu>
        {testData.map((game) => (
          <SelectionItem
            isSelected={selectedGameId === game.id}
            onClick={() => setSelectedGame(game.id)}
          >
            {game.gameName}
          </SelectionItem>
        ))}
      </SelectionMenu>
      <StartButton onClick={handleStartGame}>Start!</StartButton>
    </StartMenuContainer>
  );
};

export default StartMenu;
