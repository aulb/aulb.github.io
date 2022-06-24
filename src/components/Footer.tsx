import React from 'react';

interface SocialMediaAccountsType {
  github: string;
  linkedin: string;
  instagram: string; 
}

const Footer = (props: { socialMediaAccounts: SocialMediaAccountsType }) => {
  const { socialMediaAccounts } = props;
  const socialMediaLinks = Object.keys(socialMediaAccounts).map(
    (key: string) => (
      <>
        {` `}
        <a
          key={key}
          target='_blank'
          rel='noopener noreferrer'
          href={socialMediaAccounts[key as keyof SocialMediaAccountsType]}
        >
          {key}
        </a>
        {` `}
      </>
    )
  );

  return (
    <footer is='footer'>
      {`+ 2014 - ${(new Date).getFullYear()} +`}
      {socialMediaLinks}
    </footer>
  );
};

export default Footer;
