import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PlaylistCards from '../components/playlistCards'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
      <Layout>
        <p>📍 San Francisco based Software Engineer. Welcome to my page!</p>
        <ul>
          <li>
            <Link to="https://www.usajapan.org/japanese-language-classes/japanese-group-classes/" target="_blank">Japanese</Link>,
            <Link to="https://www.clayroomsf.com/" target="_blank"> pottery</Link>,
            <Link to="http://www.churchof8wheels.com/" target="_blank"> rollerblading</Link> in San Francisco
          </li>
          <li><Link to="https://www.recurse.com/" target="_blank">Recurse Center</Link>, programming sabatical in NYC</li>
          <li><Link to="http://nationalpokedex.github.io/" target="_blank">Compact National Pokédex</Link> I built</li>
          <li><Link to="/maps" target="_blank">My maps!</Link> <Link to="https://www.google.com/maps/d/u/0/edit?mid=1a4om7EQLl9LV81wKUDGWtsgw3ZoJnnk&usp=sharing" target="_blank">Food recommendations</Link> in San Francisco</li>
        </ul>
        <p>🎵 My recent <Link to="/playlists" target="_blank"><strong>monthly Spotify playlists</strong></Link>:</p>
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
