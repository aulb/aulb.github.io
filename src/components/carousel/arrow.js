import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 50%;
  cursor: pointer;
  font-size: 28px;
`;

const Arrow = ({ direction, onClickHandler }) => {
  let emoji = '➡️'; 
  let supplementStyling = { left: '80%' };
  if (direction === 'left') {
    emoji = '⬅️';
    supplementStyling.left = '10%';
  }
  return <Container
    style={supplementStyling}
    onClick={event => onClickHandler(direction)}
  >
    {emoji}
  </Container>;
};

export default Arrow;
