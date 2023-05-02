import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import SpotifyPlaylists from '../components/spotifyPlaylists'
import { Link } from 'gatsby'

const IndexPage = () => {

  return (
      <Layout>
        <p>
          Hello welcome to my page! <br />
          I'm currently a SWE based in San Francisco 🌉.<br /> 
          Current interests: <Link to="https://www.usajapan.org/japanese-language-classes/japanese-group-classes/">Japanese learning</Link>, <Link to="https://www.clayroomsf.com/">studio pottery</Link>, light reading, overnight oats, and coffee. <br />
          My recent monthly Spotify visualized: <br />
          <SpotifyPlaylists />
          Last updated: 05/01/2023
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