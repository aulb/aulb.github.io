import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import Link from 'gatsby-link';
import { getActivePosts } from '../utils';
import { 
  availableLanguages, 
  availablePostTypes,
  availablePostTypesText,
  defaultLanguage,
  defaultPostType,
} from '../utils/constants';

const StyledSection = Flex.extend`
  width: 100%;
  font-size: 36px;
  font-weight: bold;
  margin: 16px 0;

  .link {
    margin-right: 16px;
  }

  .active {
    border-bottom-style: solid !important;
    border-bottom: 5px;
  }
`;

const generatePostSnippet = post => {
  return <div key={post.id}>
    <Link
      to={post.fields.slug}
      css={{ textDecoration: `none`, color: `inherit` }}
    >
      <h3>{post.frontmatter.title}</h3>
    </Link>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
  </div>
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
    return Object.keys(availablePostTypes).map(postType => {
      const postsAvailable = getActivePosts(data, {
        selectedType: postType,
        selectedLanguage: selectedLanguage
      });

      // TODO: revamp this render tabs
      if (!postsAvailable.length) return null;

      const postTypeText = availablePostTypesText[selectedLanguage][postType];
      const isActive = this.state.currentTab === postType;
      return <span 
        onClick={element => this.tabOnClick(element)}
        className={`link ${isActive ? 'active' : ''}`}
        key={postType}
        data-posttype={postType}
      >
        {postTypeText}
      </span>;
    });
  }

  render() {
    const { data, selectedLanguage } = this.props;
    const { currentTab } = this.state;
    const posts = getActivePosts(data, {
      selectedType: currentTab,
      selectedLanguage: selectedLanguage
    });

    return <div>
      <StyledSection id='links'>
        { this.renderTabs(data) }
      </StyledSection>
      { generatePostList(posts) }
    </div>;
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
