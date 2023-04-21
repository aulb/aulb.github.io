import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SpotifyPlaylists from '../components/spotifyPlaylists'

const IndexPage = () => {

  return (
      <Layout>
        <p>
          Hello, welcome to my page! <br />
          I'm currently a SWE based in San Francisco 🌉.<br /> 
          Recent monthly Spotify playlists: <br />
          <SpotifyPlaylists />
          Current interests: Japanese learning (with some French and Korean), studio pottery, light reading, and coffee. <br />
          Last updated: 04/21/2023
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