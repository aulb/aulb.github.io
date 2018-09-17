import React from 'react';
import styled from 'styled-components';

const Container = styled('img')`
  margin: 0;
`;

const Image = ({ url }) => {
  return <Container src={url} />;
};

export default Image;
