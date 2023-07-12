import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PlaylistCards from '../components/playlistCards'
import SpotifyGenreVisualizations from '../components/spotifyGenreVisualizations'

const SpotifyPlaylistPage = () => {
  return (
      <Layout>
        <p>
          <PlaylistCards />
          {/* <SpotifyGenreVisualizations /> */}
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