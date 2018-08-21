import React from 'react';
import Link from 'gatsby-link';
import ferryPic from '../assets/ferry.jpg';
import Section from '../components/section';

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

const intro = <section id='intro'>
  <span><strong>albert</strong>, currently based in the bay area 🌴</span><br/>
  <span><strong>albert</strong>, currently based in the bay area 🌈</span><br/>
  <span><strong>albert</strong>, currently based in the bay area 🌸</span><br/>
  <span>my food log</span>
</section>;


export default ({ data }) => {
  const { allMarkdownRemark } = data;
  const { totalCount, edges } = allMarkdownRemark;
  return <div className='picContainer'>
    <img 
      src={ferryPic}
      style={{ width: '100%', marginBottom: 16, borderColor: '#ababab', borderRadius: '3px', opacity: 0.75 }}
      alt='Toronto Island Ferry'
      width='auto'
    />
    {intro}
  </div>;
};

    // <div id='content-container'>
    //   {edges.map(generatePostList)}
    // </div>

export const query = graphql`
  query IndexQuery {
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
