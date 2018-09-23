import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { getActivePosts } from '../utils';
import { 
  availableLanguages, 
  availablePostTypes,
  defaultLanguage,
  defaultPostType,
} from '../utils/constants';
import getLocale from '../utils/lang';

const StyledSection = Flex.extend`
  width: 100%;
  margin: 16px 0;

  .link {
    font-weight: bold;
    cursor: pointer;
  }

  .active {
    border-bottom-style: solid !important;
    border-color: #0000FF !important;
    border-bottom: 2px;
  }
`;

const PostTitle = styled('h3')`
  margin: 0;
`;

const PostMeta = styled('span')`
  color: #696969;
`;

const PostContainer = styled('div')`
  margin: 16px 0;
`;

const Container = styled('div')`
  border-top: solid 1px;
  border-color: #E7EEFD;
`;

const generatePostSnippet = post => {
  const { id, fields, frontmatter, excerpt } = post;
  const postExcerpt = frontmatter.excerpt ? frontmatter.excerpt : excerpt;
  return <PostContainer key={id}>
    <Link
      to={fields.slug}
      css={{ textDecoration: `none`, color: `#0000FF` }}
    >
      <PostTitle>{frontmatter.title}</PostTitle>
    </Link>
    <PostMeta>{frontmatter.date}</PostMeta>
    <p>{postExcerpt}</p>
  </PostContainer>
};

const generatePostList = posts => {
  return posts.map(post => generatePostSnippet(post.node));
};

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: defaultPostType,
    };
    this.tabOnClick = this.tabOnClick.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
  }

  tabOnClick(element) {
    const clicked = element.target.dataset.posttype;
    this.setState({
      currentTab: availablePostTypes[clicked],
    });
  }

  renderTabs(data) {
    const { selectedLanguage } = this.props;
    const seeMore = getLocale(selectedLanguage, 'seeMore');
    const tabs = [];

    Object.keys(availablePostTypes).map(postType => {
      const postsAvailable = getActivePosts(data, {
        selectedType: postType,
        selectedLanguage: selectedLanguage,
      });

      // TODO: revamp this render tabs
      if (!postsAvailable.length) return null;

      const postTypeText = getLocale(selectedLanguage, postType);
      const isActive = this.state.currentTab === postType;
      // hack: https://stackoverflow.com/questions/32686728/how-to-avoid-jsx-component-from-condensing-when-react-js-rendering-it
      tabs.push(<span><span
        onClick={element => this.tabOnClick(element)}
        className={`link ${isActive ? 'active' : ''}`}
        key={postType}
        data-posttype={postType}
      >
        {postTypeText}
      </span>{' '}</span>);
    });

    return <span>{seeMore}{' '}{ tabs }</span>;
  }

  render() {
    const { data, selectedLanguage } = this.props;
    const { currentTab } = this.state;
    const posts = getActivePosts(data, {
      selectedType: currentTab,
      selectedLanguage: selectedLanguage
    });

    return <Container>
      <StyledSection id='links'>
        { this.renderTabs(data) }
      </StyledSection>
      { generatePostList(posts) }
    </Container>;
  }
}

Section.propTypes = {
  data: PropTypes.object,
  selectedType: PropTypes.string,
  selectedLanguage: PropTypes.string,
};

Section.defaultProps = {
  selectedType: defaultPostType,
  selectedLanguage: defaultLanguage,
};

export default Section;
