import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import Image from './image';
import Caption from './caption';
import Arrow from './arrow';

const MainContainer = Flex.extend`
  width: 100%;
  overflow: auto;
  font-size: 14px;
  text-align: center;
`;

const OuterDiv = Flex.extend`
  height: 480px;
  width: 360px;
  margin: 0 auto;
  border: 3px solid #E7EEFD;
  border-radius: 3px;
`;

const InnerDiv = Flex.extend`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      imagesMeta: props.imagesMeta,
    };
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  onArrowClick(direction) {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex + (direction === 'left' ? -1 : 1)
    });
  }

  render() {
    if (!this.state.imagesMeta.length) return null;

    const { currentIndex, imagesMeta } = this.state;
    const { src, caption, group } = imagesMeta[currentIndex];
    // https://github.com/gatsbyjs/gatsby/issues/1532
    const imgUrl = require('../../photos/' + src + '.jpeg');
    const leftArrow = currentIndex ? <Arrow direction='left' onClickHandler={this.onArrowClick} /> : null;
    const rightArrow = currentIndex === imagesMeta.length - 1 ? null :
      <Arrow direction='right' onClickHandler={this.onArrowClick} />;

    return <MainContainer>
      <OuterDiv>
        <InnerDiv>
          <Image url={imgUrl} />
          <Caption caption={caption} />
          { leftArrow }
          { rightArrow }
        </InnerDiv>
      </OuterDiv>
    </MainContainer>;
  }
}

Carousel.propTypes = {
  imagesMeta: PropTypes.array,
};

Carousel.defaultProps = {
  imagesMeta: [],
};

export default Carousel;
