import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import Collapsible from './index';

const MainContainer = styled('div')`
`;

const Section = styled('div')`
`;

class Collapsibles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // const { src, caption, group } = {};
    return <MainContainer>
    a
    </MainContainer>;
  }
}

Collapsibles.propTypes = {
  data: PropTypes.array,
};

Collapsibles.defaultProps = {
  data: {},
};

export default Collapsibles;
