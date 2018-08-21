import React from "react";
import Link from "gatsby-link";

import styled, {ThemeProvider} from 'styled-components';
import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import {Flex} from 'grid-styled';

const theme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  colors: {
    background: '#fcfdff',
    heading: '#494E72',
    text: '#4E6087',
    textHover: '#3336c7',
    toggleBackground: '#3336c7',
    toggleButton: '#fcfdff',
    border: '#e6e9ef',
    mutedBorder: '#e7eefd',
    link: '#3336c7',
    primary: '#00f',
    syntax: {
      background: '#f4f7fd',
      text: '#586e75',
    },
  },
};

const Inner = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StyledContainer = Flex.extend`
  width: 100%;
  padding: 32px 0;
  font-size: 1.1em;
  line-height: 1.8em;
  color: #494E72;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, data } = this.props;
    const { title, github, linkedin } = data.site.siteMetadata;
    const socialMediaAccounts = {
      github,
      linkedin
    };

    return <ThemeProvider theme={theme}>
      <Inner>
        <Page>
          <Header title={title}/>
          <StyledContainer>
            {children()}
          </StyledContainer>
          <Footer socialMediaAccounts={socialMediaAccounts} />
        </Page>
      </Inner>
    </ThemeProvider>;
  }

}

export default Index;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        github
        linkedin
      }
    }
  }
`
