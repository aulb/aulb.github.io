import React from 'react';
import PropTypes from 'prop-types';

const currentYear = (new Date).getFullYear();

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
    <footer is='footer'>
      {`+ 2014 - ${currentYear} +`}
      {socialMediaLinks}
    </footer>
  );
};

Footer.propTypes = {
  socialMediaAccounts: PropTypes.object,
};

Footer.defaultProps = {};

export default Footer;