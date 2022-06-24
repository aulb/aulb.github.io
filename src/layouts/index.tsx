import React from "react"
import Footer from '../components/Footer'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Page = styled.div`
  color: #232129;
  padding: 5% 12% 0 12%;
  fontFamily: -apple-system, Roboto, sans-serif, serif;
`;

const Layout = (props: any) => {
    const { pageTitle, children } = props;
    const data = useStaticQuery(graphql`
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
    `);
    const { github, linkedin, instagram } = data.site.siteMetadata;
    return (
      <Page>
        <title>{pageTitle}</title>
        {children}
        <Footer socialMediaAccounts={{
          github,
          linkedin,
          instagram,
        }} />
      </Page>
    );
  };

export default Layout;
