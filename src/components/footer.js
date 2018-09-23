import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import { getOtherLanguageOption } from '../utils/';
import { setLanguageFromLocalStorage } from '../utils/storageUtils';
import { availableLanguages, defaultLanguage } from '../utils/constants';
import getLocale from '../utils/lang';

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
    cursor: pointer;
  }

  .right {
    margin-left: auto;
  }
`;

const Footer = ({ socialMediaAccounts, selectedLanguage, switchLanguage }) => {
  const onLanguageSwitch = element => {
    element.preventDefault();
    const selectedLanguage = element.target.dataset.language;
    switchLanguage(selectedLanguage);
    setLanguageFromLocalStorage(selectedLanguage);
  };

  const createSocialMediaLinks = key => {
    return <a 
      key={key}
      target="_blank"
      rel="noopener noreferrer"
      href={socialMediaAccounts[key]}
    >
      {key}
    </a>;
  };

  const language = getOtherLanguageOption(selectedLanguage);
  const socialMediaLinks = Object.keys(socialMediaAccounts).map(createSocialMediaLinks);

  return <StyledFooter is='footer'>
    &copy; 2014 - { currentYear }
    { socialMediaLinks }

    <a data-language={language.value} onClick={onLanguageSwitch}>{ language.text }</a>
    <a className='right' 
      dangerouslySetInnerHTML={{ __html: getLocale(selectedLanguage, 'madeWithLove')}}>
    </a>
  </StyledFooter>;
};

Footer.propTypes = {
  socialMediaAccounts: PropTypes.object,
  selectedLanguage: PropTypes.string,
  switchLanguage: PropTypes.func,
};

Footer.defaultProps = {
  selectedLanguage: defaultLanguage,
};

export default Footer;
