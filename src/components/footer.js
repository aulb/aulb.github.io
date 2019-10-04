import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';

const currentYear = (new Date).getFullYear();

const StyledFooter = Flex.extend`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;
  font-size: 14px;

  a {
    margin: 0 8px;
    text-decoration: none;
    border-bottom: 0;
    cursor: pointer;
  }
`;

const Footer = ({ socialMediaAccounts }) => {
  const createSocialMediaLinks = key => {
    return (
      <a
        key={key}
        target='_blank'
        rel='noopener noreferrer'
        href={socialMediaAccounts[key]}
      >
        {key}
      </a>
    );
  };

  const socialMediaLinks = Object.keys(socialMediaAccounts).map(createSocialMediaLinks);

  return (
    <StyledFooter is='footer'>
      { `+ 2014 - ${currentYear} +` }
      { socialMediaLinks }
    </StyledFooter>
  );
};

Footer.propTypes = {
  socialMediaAccounts: PropTypes.object,
};

Footer.defaultProps = {};

export default Footer;
