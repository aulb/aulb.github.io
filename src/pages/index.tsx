import * as React from "react";
import Layout from "../layouts";
import Blog from "../layouts/Blog";

const IndexPage = () => {
  return (
    <Layout pageTitle="albert">
      <h1>hello!</h1>
      <p>
        i'm albert. 今の興味： languages (深), 35mm, pin badges. 現在： san francisco.
      </p>
      <Blog />
    </Layout>
  )
};

export default IndexPage;
