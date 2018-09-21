import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {Flex, Box} from 'grid-styled';
import { shuffle, simplePythonRange } from '../utils';

// Brand on the left
const Brand = styled('span')`
  width: 100%;
  display: block;
  text-decoration: none;
  border-bottom: 0;
  font-weight: bold;
  font-size: 48px;
  margin: 0 auto;
`;

// blue color: #0000FF;
const StyledNav = Flex.extend`
  height: 125px;
  width: 100%;
  padding: 32px 16px 24px 16px;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #E7EEFD;
  background-color: #fcfdff;
  text-align: center;
`;

// Bird header animation
const birds = ['🐧', '🐦', '🐤'];
const birdRotateSpeed = 1888;
const getBirds = () => {
  let arrayRange = simplePythonRange(birds.length);
  return shuffle(arrayRange).map(idx => birds[idx]).join("");
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastScrollTop: 0,
      title: props.title,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        title: getBirds()
      });
    }, birdRotateSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { title } = this.state;
    return <StyledNav is="header" justify="space-between">
      <Brand href="/" id="brand">{ title }</Brand>
    </StyledNav>;
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
