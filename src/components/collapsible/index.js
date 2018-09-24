import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

const MainContainer = styled('div')`
`;

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const { src, caption, group } = {};
    return <MainContainer>
    </MainContainer>;
  }
}

Collapsible.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string,
};

export default Collapsible;
