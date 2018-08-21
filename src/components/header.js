import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// link
import Link from 'gatsby-link';
import {Flex, Box} from 'grid-styled';

// Brand on the left
const Brand = styled('span')`
  display: block;
  text-decoration: none;
  border-bottom: 0;
  font-weight: bold;
  font-size: 48px;
  margin: 0 auto;
`;

// blue color: #0000FF;

const StyledNav = Flex.extend`
  width: 100%;
  padding: 32px 16px 24px 16px;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #E7EEFD;
  background-color: #fcfdff;
  position: sticky;
  text-align: center;
`;

const Nav = Box.extend`
  display: flex;
  align-items:  center;
  flex-shrink: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 8px;
    }
  }

  a {
    border-bottom: 0;

    &:hover {

    }
  }
`;

/*
  <Nav is="nav">
    <ul>
      <Link to="/"><li>home</li></Link>
      <Link to="/blog"><li>blog</li></Link>
      <Link to="/note"><li>note</li></Link>
    </ul>
  </Nav>
*/

const rotateBirds = birdText => {
  const birdArray = birdText.split('');
  const length = birdArray.length;
  let rotatedBirdArray = [];
  rotatedBirdArray = rotatedBirdArray.concat(birdArray.slice(length - 2, length));
  rotatedBirdArray = rotatedBirdArray.concat(birdArray.slice(0, length - 2));
  const rotatedBirdText = rotatedBirdArray.join('');
  return rotatedBirdText;
};

const ROTATE_SPEED = 750;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        title: rotateBirds(this.state.title)
      });
    }, ROTATE_SPEED);
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
