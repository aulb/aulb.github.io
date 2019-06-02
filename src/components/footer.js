import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';

const currentYear = (new Date).getFullYear();

// "bar" color changed to my style
const StyledFooter = Flex.extend`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px 0;
  // border-top: 1px solid #E7EEFD;
  font-size: 14px;
  height: 12%;

  a {
    margin: 0 8px;
    text-decoration: none;
    border-bottom: 0;
    cursor: pointer;
  }
`;

const Footer = ({ socialMediaAccounts }) => {
  const createSocialMediaLinks = key => {
    return <a
      key={key}
      target='_blank'
      rel='noopener noreferrer'
      href={socialMediaAccounts[key]}
    >
      {key}
    </a>;
  };

  const socialMediaLinks = Object.keys(socialMediaAccounts).map(createSocialMediaLinks);

  return <StyledFooter is='footer'>
    &copy; 2014 - { currentYear }
    { socialMediaLinks }
  </StyledFooter>;
};

Footer.propTypes = {
  socialMediaAccounts: PropTypes.object,
};

Footer.defaultProps = {};

export default Footer;
