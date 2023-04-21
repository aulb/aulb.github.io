import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {

  return (
      <Layout>
        <p>
          My monthly <Link to="/playlists">Spotify playlists here</Link>. <br />
          Current interests includes Japanese learning (with some French and Korean), studio pottery, light reading, and coffee.  <br />
        </p>
        <p>Last updated: 04/21/2023</p>
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