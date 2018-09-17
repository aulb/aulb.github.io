import React from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  position: absolute;
  background: rgb(255, 255, 255, 0.75);
  width: 100%;
  top: 80%;
  font-weight: bold;
`;

const Caption = ({ caption }) => {
  return <Container>{caption}</Container>;
};

export default Caption;
