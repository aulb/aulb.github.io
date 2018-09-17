import React from 'react';
import Carousel from '../components/carousel';

const openJsonHelper = helperName => {
  // https://github.com/gatsbyjs/gatsby/issues/356
  const jsonData = require(`../posts/helper/${helperName}.json`);
  return jsonData;
};

// blog posts uses this page as template: modify in gatsby-node.js
export default ({ data }) => {
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;

  const { title, carousel } = frontmatter;
  let carouselObj = null;
  if (carousel) {
    const imagesMeta = openJsonHelper(carousel);
    carouselObj = <Carousel imagesMeta={imagesMeta} />;
  }

  return <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
    { carouselObj }
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
        carousel
      }
    }
  }
`;
