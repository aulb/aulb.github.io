import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PlaylistCards from '../components/playlistCards'

const SpotifyPlaylistPage = () => {
  return (
      <Layout>
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