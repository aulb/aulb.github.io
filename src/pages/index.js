import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PlaylistCards from '../components/playlistCards'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <p>📍 Software engineer based in San Francisco</p>
        <p>👀 <Link to="https://www.usajapan.org/japanese-language-classes/japanese-group-classes/" target="_blank">Japanese</Link>, <Link to="https://www.clayroomsf.com/" target="_blank">studio pottery</Link>, <Link to="http://www.churchof8wheels.com/" target="_blank">rollerblading</Link>, <Link to="http://nationalpokedex.github.io/" target="_blank">Pokédex</Link>, and coffee</p>
        <p>🎵 My recent <Link to="/playlists"><strong>monthly Spotify playlists</strong></Link>:</p>
        <PlaylistCards maxCard={2} includeHeader={false} includeShowAll={false} />
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
