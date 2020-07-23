import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 20px;
`;

const Seconds = styled.div`
    color: ${(props) => (props.under5 ? 'red' : 'black')}
`;

const Pause = styled.button`
    padding: .6rem 1.5rem;
    margin: .4rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8rem;
    border-style: groove;    
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#63D2FF' : '')};
    &:hover {
        background-color: #88ddff;
    }
    &:focus {
        outline: none;
    }
`;

const Reset = styled.button`
    padding: .6rem 1.5rem;
    margin: .4rem;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8rem;
    border-style: groove;
    cursor: pointer;
    &:hover{
        background-color: #FF495C;
    }
    &:focus {
        outline: none;
    }
`;

export const Timer = () => {
  const [seconds, setSeconds] = useState(15);
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(15);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((sec) => sec - 1);
      }, 1000);
    } else {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Container>
      <Seconds under5={seconds <= 5}>{`${seconds}s`}</Seconds>
      <div>
        <Pause active={isActive} onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</Pause>
        <Reset onClick={resetTimer}>Reset</Reset>
      </div>
    </Container>
  );
};

export default Timer;
