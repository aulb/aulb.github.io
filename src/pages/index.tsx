import * as React from "react";
import Layout from "../layouts";
import styled from "styled-components";

const Heading = styled.h1`
  marginTop: 0;
  marginBottom: 24;
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="my webpage">
      <Heading>albert's ウェッブページ</Heading>
      <p>
        ヘイ!albertです。現在、言語を学ぶことが興味深いです。
      </p>
      <h2>ブログ</h2>
    </Layout>
  )
};

export default IndexPage;
