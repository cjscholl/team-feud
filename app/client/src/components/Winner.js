import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ConfettiGenerator from 'confetti-js';
import Button from './common/Button';

const WinnerText = styled.div`
  color: #8AEA92;
  font-size: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: space-between;
  background-color: transparent;
`;

const Confetti = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const MenuButton = styled(Button)`
  z-index: 1;
`;
export const Winner = ({
  team1Score, team2Score,
}) => {
  const history = useHistory();
  let winningText = '';
  if (team1Score > team2Score || team1Score < team2Score) {
    const winningTeam = team1Score > team2Score ? '1' : '2';
    winningText = `Team ${winningTeam} wins!`;
  } else winningText = 'Its a tie!';

  const handleMenuClick = () => {
    history.push('/');
  };

  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <>
      <Confetti id="my-canvas" />
      <WinnerText>
        {winningText}
        <MenuButton onClick={handleMenuClick}>Menu</MenuButton>
      </WinnerText>
    </>
  );
};

const mapStateToProps = (state) => ({
  team1Score: state.teams['1'].points,
  team2Score: state.teams['2'].points,
});
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Winner);

Winner.propTypes = {
  team1Score: PropTypes.number.isRequired,
  team2Score: PropTypes.number.isRequired,
};
