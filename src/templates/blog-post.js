import React from 'react';
import { availableHelpers } from '../utils/constants';
import Carousel from '../components/carousel';

const openJsonHelper = helperName => {
  // https://github.com/gatsbyjs/gatsby/issues/356
  const jsonData = require(`../posts/helper/${helperName}.json`);
  return jsonData;
};

const helperParser = helperString => {
  const helperList = helperString.split(':');
  return {
    helperType: helperList[0],
    helperFile: helperList[1],
  };
};

// blog posts uses this page as template: modify in gatsby-node.js
export default ({ data }) => {
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;
  const extraContent = [];

  const { title, helper } = frontmatter;
  const { helperType, helperFile } = helperParser(helper);
  if (helperType === availableHelpers.carousel) {
    const imagesMeta = openJsonHelper(helperFile);
    extraContent.push(<Carousel key='post-carousel' imagesMeta={imagesMeta} />);
  }

  return <div key='main-post-container'>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    { extraContent }
  </div>;
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        language
        categories
        helper
      }
    }
  }
`;
