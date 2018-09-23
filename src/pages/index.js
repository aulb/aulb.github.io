import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ferryPic from '../assets/ferry.jpg';
import Section from '../components/section';
import { availableLanguages } from '../utils/constants';
import getLocale from '../utils/lang';

const Container = styled('span')``;
const IntroContainer = styled('section')`
  margin-bottom: 16px;
`;

const intro = selectedLanguage => {
  const introRepeat = getLocale(selectedLanguage, 'introRepeat');
  const about = getLocale(selectedLanguage, 'about');

  return <IntroContainer>
    <span><strong>albert</strong>{ introRepeat } 🌴</span><br/>
    <span><strong>albert</strong>{ introRepeat } 🌈</span><br/>
    <span><strong>albert</strong>{ introRepeat } 🌸</span><br/>
    <span><strong>albert</strong>{ introRepeat } 💯</span><br/>
    <span><strong>albert</strong>{ introRepeat } 🈺</span><br/>
    <strong><a href="/about">{ about }</a></strong>
  </IntroContainer>;
};

export default props => {
  const { selectedLanguage, data } = props;
  return <Container>
    <img 
      src={ferryPic}
      style={{ width: '100%', marginBottom: 16, borderColor: '#ababab', borderRadius: '3px', opacity: 0.75 }}
      alt='Toronto Island Ferry'
      title={getLocale(selectedLanguage, 'ferry')}
      width='auto'
    />
    {intro(selectedLanguage)}
    <Section 
      data={data}
      selectedLanguage={selectedLanguage}
    />
  </Container>;
};

// TODO: Gatsby bug to keep in mind https://github.com/gatsbyjs/gatsby/issues/6916
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
            published
            language
            type
            categories
          }
          fields {
            slug
          }
          excerpt(pruneLength: 140)
        }
      }
    }
  }
`;
