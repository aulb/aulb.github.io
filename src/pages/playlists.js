import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SpotifyPlaylists from '../components/spotifyPlaylists'
import SpotifyGenreVisualizations from '../components/spotifyGenreVisualizations'

const SpotifyPlaylistPage = () => {
  return (
      <Layout>
        <p>
          My monthly playlists: <br />
          <SpotifyPlaylists />
          My playlists' genres visualized: <br />
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

export default SpotifyPlaylistPage