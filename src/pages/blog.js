import React from 'react';
import Link from 'gatsby-link';

const generatePostList = ({ node }) => {
  return <div key={node.id}>
    <Link
      to={node.fields.slug}
      css={{ textDecoration: `none`, color: `inherit` }}
    >
      <h3>{node.frontmatter.title}</h3>
    </Link>
    <span>{node.frontmatter.date}</span>
    <p>{node.excerpt}</p>
  </div>;
};

export default ({ data }) => {
  const { allMarkdownRemark } = data;
  const { totalCount, edges } = allMarkdownRemark;
  return <div id='content_container'>
    {edges.map(generatePostList)}
  </div>;
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
