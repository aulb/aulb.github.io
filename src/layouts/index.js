import React, {Component} from "react";
import styled from 'styled-components';
import Page from '../components/page';
import Footer from '../components/footer';

export default class Index extends Component {
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
        <Footer socialMediaAccounts={socialMediaAccounts} />
      </Page>
    );
  }
};

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
