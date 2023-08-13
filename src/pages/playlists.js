import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PlaylistCards from '../components/playlistCards'
import PlaylistTopGenres from '../components/playlistTopGenres'

const SpotifyPlaylistPage = () => {
  return (
      <Layout>
        <PlaylistTopGenres />
        <PlaylistCards />
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
