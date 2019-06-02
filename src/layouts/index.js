import React, {Component} from "react";
import styled from 'styled-components';
import Page from '../components/page';
import Footer from '../components/footer';

const Inner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Portrait = styled.div`
  background: transparent;
  position: fixed;
  max-width: 540px;
  width: 78%;
  height: 85%;
  top: 15%;
  left: 15%;
  transform: rotate3d(2,-2,-2,14deg);
`;

const Paper = styled.div`
  position: absolute;
  border: 1px solid black;
  background: #fbf5e9;
  // https://www.madebymike.com.au/writing/precise-control-responsive-typography/
  font-size: calc(12px + 4vw);
  width: 95%;
  height: 55%;
  padding: 2% 4%;
  z-index: 0;
`;

const REFACTOR_handWrapper = styled.div`
  position: absolute;
  width: 45%;
  height: 75%;
  background: transparent;
  top: 30%;
  left: 39%;
  transform: rotate(-12deg);
  z-index: ${props => props.zindex ? props.zindex : 'inherit'}
`;

const ThumbWrapper = styled.div`
  position: absolute;
  width: 90%;
  height: 70%;
  top: 14%;
  left: 5%;
  transform: rotate(23deg);
  background: transparent;
  z-index: 2;
`;

const Thumb1 = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 64%;
  height: 20%;
  background: #f8a27f;
  border: 1px solid black;
  border-radius: 50%;
`;

const Thumb2 = styled.div`
  position: absolute;
  top: 12%;
  left: 34%;
  width: 43%;
  height: 30%;
  background: #f8a27f;
  border: 1px solid black;
  border-radius: 50%;
  mix-blend-mode: screen;
`;

const Palm = styled.div`
  position: absolute;
  top: 10%;
  width: 95%;
  height: 40%;
  border-radius: 40%;
  background: #f8a27f;
  border: 1px solid black;
  z-index: -1;
  mix-blend-mode: lighten;
`;

const Arm = styled.div`
  position: absolute;
  top: 10%;
  left: 13%;
  width: 67%;
  height: 100%;
  background: #f8a27f;
  border: 1px solid black;
  transform: rotate(5deg);
  z-index: -2;
`;

const getBackground = () => {
  return <Portrait>
    <Paper>
      you are a very loving person and your life will be filled with romance
    </Paper>
    <REFACTOR_handWrapper zindex={-2}>
      <Arm />
      <Palm/>
    </REFACTOR_handWrapper>
    <REFACTOR_handWrapper>
      <ThumbWrapper>
        <Thumb1/>
        <Thumb2/>
      </ThumbWrapper>
    </REFACTOR_handWrapper>
  </Portrait>;
}

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { github, linkedin, instagram } = data.site.siteMetadata;
    const socialMediaAccounts = {
      github,
      linkedin,
      instagram,
    };

    return <Inner>
      {getBackground()}
      <Page>
        <Footer socialMediaAccounts={socialMediaAccounts} />
      </Page>
    </Inner>;
  }
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        github
        linkedin
        instagram
      }
    }
  }
`;
