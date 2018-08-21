import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import Link from "gatsby-link";

const StyledSection = Flex.extend`
  width: 100%;
  font-size: 36px;
  font-weight: bold;

  a {
    margin-right: 16px;
    text-decoration: none;
  }
`;

const Section = () => {
  const links = <StyledSection id='links'>
    <Link to='/blog' className='link'>blog</Link>
    <Link to='/note' className='link'>note</Link>
    <Link to='/link' className='link'>link</Link>
  </StyledSection>;
  return links;
};

export default Section;
