import React from 'react';
import styled from 'styled-components';
import { availableHelpers } from '../utils/constants';
import Carousel from '../components/carousel';
import Collapsibles from '../components/collapsible/collapsibles';

const openJsonHelper = helperName => {
  // https://github.com/gatsbyjs/gatsby/issues/356
  const jsonData = require(`../posts/helper/${helperName}.json`);
  return jsonData;
};

const helperParser = helperString => {
  if (!helperString) return {};
  const helperList = helperString.split(':');
  return {
    helperType: helperList[0],
    helperFile: helperList[1],
  };
};

const PostContainer = styled('div')`
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  .header {
    font-size: 48px;
  }

  .date {
    color: #696969;
  }

  ul, li {
    margin-bottom: 0;
    list-style: circle;
  }
`;

const MainContent = styled('div')`
  margin: 32px 0;

  h1, h2, h3, ul, p {
    margin: 8px 0;
  }
`;

// blog posts uses this page as template: modify in gatsby-node.js
export default ({ data }) => {
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;
  const extraContent = [];

  const { title, helper, date } = frontmatter;
  const { helperType, helperFile } = helperParser(helper);
  if (helperType === availableHelpers.carousel) {
    const imagesMeta = openJsonHelper(helperFile);
    extraContent.push(<Carousel key='post-carousel' imagesMeta={imagesMeta} />);
  }

  if (helperType === availableHelpers.collapsible) {
    const collapsibleData = openJsonHelper(helperFile);
    extraContent.push(<Collapsibles key='post-collapsible' data={collapsibleData} />);
  }

  return <PostContainer key='main-post-container'>
    <h1 className='header'>{title}</h1>
    <h2 className='date'>{date}</h2>
    <MainContent dangerouslySetInnerHTML={{ __html: post.html }} />
    { extraContent }
  </PostContainer>;
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        language
        categories
        helper
      }
    }
  }
`;
