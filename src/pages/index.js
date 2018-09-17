import React from 'react';
import Link from 'gatsby-link';
import ferryPic from '../assets/ferry.jpg';
import Section from '../components/section';
import { availableLanguages } from '../utils/constants';

const intro = (selectedLanguage) => {
  let repeat = ', currently based in the bay area';
  let about = '';
  if (selectedLanguage === availableLanguages.japanese) {
    repeat = '、ベイエリアで今から';
    about = 'について';
  }

  return <section id='intro'>
    <span><strong>albert</strong>{ repeat } 🌴</span><br/>
    <span><strong>albert</strong>{ repeat } 🌈</span><br/>
    <span><strong>albert</strong>{ repeat } 🌸</span><br/>
    <span><strong>albert</strong>{ repeat } 💯</span><br/>
    <span><strong>albert</strong>{ repeat } 🈺</span><br/>
    <strong><a href="/about">{ about }</a></strong>
  </section>;
};

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

export default (props) => {
  return <div>
    <img 
      src={ferryPic}
      style={{ width: '100%', marginBottom: 16, borderColor: '#ababab', borderRadius: '3px', opacity: 0.75 }}
      alt='Toronto Island Ferry'
      title='this is toronto, not bay area. i love toronto yo'
      width='auto'
    />
    {intro(props.selectedLanguage)}
    <Section 
      data={props.data}
      selectedLanguage={props.selectedLanguage}
    />
  </div>;
};

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
            published
            language
            type
            categories
            carousel
          }
          fields {
            slug
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
