import React, {Component} from "react";
import styled from 'styled-components';
import Page from '../components/page';
import Footer from '../components/footer';

const StyledPage = styled.div`
  width: 100%;
  padding: 16px;
  color: #686967;
  font-size: 54px;
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const textHAHAHA = (
  <span>
    ALBERT SAN FRANCISCO BAY AREA ALBERT IS AN <i>INTERdisciplinary planetary✨</i> designer developer DABbling in jsx c+++ in his spare time in his spare time. сладких снов ✨
  </span>
);

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { github, linkedin, instagram } = data.site.siteMetadata;
    const socialMediaAccounts = {
      github,
      linkedin,
      instagram,
    };

    return (
      <Page>
        <StyledPage>
          {textHAHAHA}
        </StyledPage>
        <Footer socialMediaAccounts={socialMediaAccounts} />
      </Page>
    );
  }
};

export default Index;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        github
        linkedin
        instagram
      }
    }
  }
`;
