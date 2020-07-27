import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CreateContainer = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 800px;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.margin}
`;

const Team = styled.div`
    cursor: pointer;
    border: 2px solid #00B4D8;
    border-radius: 5px;    
    width: 100%;
    padding: 10px;
    font-size: 20px;
    &:hover {
        background-color: #00B4D8;
    }
`;

const HeaderButtons = styled.button`
    margin: ${(props) => props.margin};
    width: 190px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 16px;
    background-color: ${(props) => {
    if (props.save) { return '#00B4D8'; }
    if (props.cancel) { return 'grey'; }
    if (props.delete) { return 'red'; }
    return '';
  }};
    color: white;
    cursor: pointer;
`;

export const ViewTeams = ({
  teamOptions,
}) => {
  const history = useHistory();

  const handleCreateNewTeam = () => {
    history.push('/teams/new');
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleTeamSelect = (key) => [
    history.push(`/teams/${key}`),
  ];

  return (
    <>
      <FlexContainer margin="20px 0">
        <HeaderButtons margin="0 auto 0 0" cancel onClick={handleCancel}>Return to Menu</HeaderButtons>
        <HeaderButtons margin="0 0 0 10px" save onClick={handleCreateNewTeam}>Create New Team</HeaderButtons>
      </FlexContainer>
      <CreateContainer>
        {Object.keys(teamOptions).map((key) => (
          <Team onClick={() => handleTeamSelect(key)}>
            {teamOptions[key].teamName}
          </Team>
        ))}
      </CreateContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { teamId } = ownProps.match.params;
  return {
    teamId,
    teamOptions: state.teamOptions,
    teamMembers: state.teamOptions[teamId],
  };
};

ViewTeams.propTypes = {
  teamOptions: PropTypes.shape({
    teamMembers: PropTypes.arrayOf(PropTypes.string),
    teamName: PropTypes.string,
  }),
};
export default connect(mapStateToProps)(ViewTeams);
