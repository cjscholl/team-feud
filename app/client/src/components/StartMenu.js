import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as gamesSelectors from '../selectors/gamesSelectors';
import * as teamActions from '../actions/teamActions';

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
    border: 2px solid #11B5E4;
    border-radius: 5px;
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
    border-radius: 5px;
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

    &:disabled {
      background-color: grey;
    }
    
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const TertiaryHeader = styled.h3`
  color: ${(props) => (props.teamNumber === 1 ? '#03045E' : '#a21c3b')};
  font-size: 20px;
  margin-bottom: 0px;
`;

const TeamContainer = styled.div`
  border: 2px solid black;
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

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.margin}
`;

export const StartMenu = ({ teamOptions, games, setSelectedTeams }) => {
  const history = useHistory();
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [selectedGameId, setSelectedGame] = useState(null);

  const handleStartGame = () => {
    const team1Info = teamOptions[team1];
    const team2Info = teamOptions[team2];
    if (team1Info && team2Info) { setSelectedTeams(team1Info, team2Info); }
    history.push(`/game/${selectedGameId}/1`);
  };

  return (
    <StartMenuContainer>
      <FlexContainer>
        <LabelContainer>
          <TertiaryHeader teamNumber={1}>Team 1</TertiaryHeader>
          <TeamContainer>
            {Object.keys(teamOptions).map((key) => (
              <TeamMember
                teamNumber={1}
                selected={key === team1}
                onClick={() => setTeam1(key)}
              >
                {teamOptions[key].teamName}
              </TeamMember>
            ))}
          </TeamContainer>
        </LabelContainer>
        <LabelContainer>
          <TertiaryHeader teamNumber={2}>Team 2</TertiaryHeader>
          <TeamContainer>
            {Object.keys(teamOptions).map((key) => (
              <TeamMember
                teamNumber={2}
                selected={key === team2}
                onClick={() => setTeam2(key)}
              >
                {teamOptions[key].teamName}
              </TeamMember>
            ))}
          </TeamContainer>
        </LabelContainer>
      </FlexContainer>
      <SelectionMenu>
        {games.map((game) => (
          <SelectionItem
            isSelected={selectedGameId === game.id}
            onClick={() => setSelectedGame(game.id)}
          >
            {game.gameName}
          </SelectionItem>
        ))}
      </SelectionMenu>
      <StartButton
        disabled={!team1 || !team2 || !selectedGameId}
        onClick={handleStartGame}
      >
        Start!
      </StartButton>
    </StartMenuContainer>
  );
};

const mapStateToProps = (state) => ({
  teamOptions: state.teamOptions,
  games: gamesSelectors.gamesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTeams: (team1, team2) => dispatch(teamActions.setSelectedTeams(team1, team2)),
});

StartMenu.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    gameName: PropTypes.string,
  })),
  teamOptions: PropTypes.shape({
    teamName: 'string',
  }),
  setSelectedTeams: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
