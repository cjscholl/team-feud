import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as teamOptionsActions from '../actions/teamOptionsActions';

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

const Input = styled.input`
    border: ${(props) => (props.showBorder ? '2px solid #00B4D8' : 'none')};
    border-bottom: ${(props) => (props.showBorder ? '2px solid #00B4D8' : '1px solid grey')};
    border-radius: ${(props) => (props.showBorder ? '5px' : 'none')};
    outline: none;
    &:active {
        border: 2px solid #00B4D8;
        border-radius: 5px;
    }
    &:focus {
        border: 2px solid #00B4D8;
        border-radius: 5px;
    }
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    padding: 10px;
    font-size: 20px;
`;

const AddButton = styled.button`
    margin-left: 10px;
    width: 190px;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 16px;
    background-color: #00B4D8;
    color: white;
`;

const DeleteButton = styled.span`
    padding: 8px;
    background-color: #ec5771;
    color: white;
    margin-left: 15px;
    border-radius: 5px;
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
`;

export const CreateTeam = ({
  teamId = null, teamMembers = [], teamName, teamOptions, saveTeam,
}) => {
  const addMemberButton = useRef(null);
  const [name, setTeamName] = useState(teamName);
  const [member, setMember] = useState('');
  const [members, setTeamMembers] = useState(teamMembers);
  const history = useHistory();

  const handleSaveTeam = () => {
    const teamNameToSave = name.replace(/\s/g, '');
    const teamIdToSave = teamId && teamId !== 'new' ? teamId : Object.keys(teamOptions).length + 1;
    saveTeam(teamIdToSave, teamNameToSave, members);
    history.push('/teams');
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleTeamName = (e) => {
    setTeamName(e.target.value);
  };
  const handleMemberName = (e) => {
    setMember(e.target.value);
  };
  const handleTeamMemberEntry = (e) => {
    if (e.key === 'Enter') {
      const team = [...members, e.target.value];
      setTeamMembers(team);
      setMember('');
    }
  };

  const handleTeamMemberUpdateBlur = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleTeamMemberUpdate = (e, i) => {
    const team = members.map((item, index) => {
      if (index !== i) {
        return item;
      }
      return e.target.value;
    });
    setTeamMembers(team);
  };

  const handleTeamMemberDelete = (i) => {
    const team = members.filter((item, index) => index !== i);
    setTeamMembers(team);
  };

  return (
    <>
      <FlexContainer margin="20px 0">
        <HeaderButtons margin="0 auto 0 0" cancel onClick={handleCancel}>Cancel</HeaderButtons>
        <HeaderButtons margin="0 0 0 10px" delete>Delete Team</HeaderButtons>
        <HeaderButtons margin="0 0 0 10px" save onClick={handleSaveTeam}>Save Team</HeaderButtons>
      </FlexContainer>

      <CreateContainer>
        <Input margin="20px 0" width="100%" placeholder="Team Name" value={name} onKeyPress={handleTeamMemberUpdateBlur} onChange={handleTeamName} />

        <FlexContainer>
          <Input width="600px" showBorder placeholder="Team Member" value={member} onChange={handleMemberName} onKeyPress={handleTeamMemberEntry} />
          <AddButton type="button" ref={addMemberButton}>Add Team Member</AddButton>
        </FlexContainer>
        {
        members.map((teamMember, index) => (
          <FlexContainer>
            <Input margin="0 0 10px 0" width="760px" onChange={(event) => handleTeamMemberUpdate(event, index)} onKeyPress={handleTeamMemberUpdateBlur} value={teamMember} />
            <DeleteButton onClick={() => handleTeamMemberDelete(index)}>X</DeleteButton>
          </FlexContainer>
        ))
    }
      </CreateContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { teamId } = ownProps.match.params;
  const team = state.teamOptions[teamId];
  return {
    teamId,
    teamOptions: state.teamOptions,
    teamMembers: team ? team.teamMembers : [],
    teamName: team ? team.teamName : '',
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveTeam: (teamId, teamName, teamMembers) => dispatch(
    teamOptionsActions.saveTeam(teamId, teamName, teamMembers),
  ),
});

CreateTeam.propTypes = {
  teamOptions: PropTypes.shape({
    teamMembers: PropTypes.arrayOf(PropTypes.string),
    teamName: PropTypes.string,
  }),
  teamMembers: PropTypes.arrayOf(PropTypes.string),
  saveTeam: PropTypes.func,
  teamId: PropTypes.string,
  teamName: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
