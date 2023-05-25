import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SpotifyGenreVisualizations from '../components/spotifyGenreVisualizations'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <p>
          📍 San Francisco <br /> 
          <Link to="https://www.usajapan.org/japanese-language-classes/japanese-group-classes/" target="_blank">Japanese</Link>, <Link to="https://www.clayroomsf.com/" target="_blank">studio pottery</Link>, light reading, <Link to="http://www.churchof8wheels.com/" target="_blank">rollerblading</Link>, and coffee <br />
          My recent monthly Spotify visualized: <br />
          <SpotifyGenreVisualizations />
        </p>
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