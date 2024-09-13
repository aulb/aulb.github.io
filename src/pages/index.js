import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PlaylistCards from '../components/playlistCards'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <PlaylistCards includeHeader={false} includeShowAll={true} />
      </Layout>
    )
}

export const Head = () => (
  <>
    <Seo />
    <meta name="description" content="albert.wtf" />
  </>
)

export default IndexPage
