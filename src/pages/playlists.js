import * as React from 'react'
import Layout from '../components/layout'
import SpotifyPlaylists from '../components/spotifyPlaylists'
import Seo from '../components/seo'

const PlaylistsPage = () => {
  return (
    <Layout>
      <SpotifyPlaylists />
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo />
    <meta name="description" content="Spotify Playlists by albert.wtf" />
  </>
)

export default PlaylistsPage