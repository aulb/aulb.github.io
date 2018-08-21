import React from 'react';
import PropTypes from 'prop-types';
import {Flex} from 'grid-styled';

const currentYear = (new Date).getFullYear();

// "bar" color changed to my style
const StyledFooter = Flex.extend`
  width: 100%;
  padding: 16px 0;
  border-top: 1px solid #E7EEFD;
  font-size: 14px;

  a {
    margin: 0 8px;
    text-decoration: none;
    border-bottom: 0;
  }
`;

const Footer = ({ socialMediaAccounts }) => {
  const createSocialMediaLinks = (key) => {
    return <a 
      target="_blank"
      rel="noopener noreferrer me"
      href={socialMediaAccounts[key]}
    >
      {key}
    </a>;
  };

  const socialMediaLinks = Object.keys(socialMediaAccounts).map(createSocialMediaLinks);

  return <StyledFooter is="footer">
    &copy; 2014 - {currentYear} 
    { socialMediaLinks }

    <a><strike>日本語</strike></a>
  </StyledFooter>;
};

Footer.propTypes = {
  socialMediaAccounts: PropTypes.object
};

export default Footer;
