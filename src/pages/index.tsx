import * as React from "react"
import Layout from '../layouts/'
import styled from 'styled-components'

const Heading = styled.h1`
  marginTop: 0;
  marginBottom: 24;
`

const IndexPage = () => {
  return (
    <Layout 
      pageTitle="my webpage"
    >
      <Heading>albert's　ウェッブページ</Heading>
      <h2>ブログ</h2>
    </Layout>
  )
}

export default IndexPage
