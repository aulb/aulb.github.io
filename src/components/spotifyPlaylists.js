import * as React from 'react'
import SpotifyJSONData from '../data/current_playlist.json'
import { Link } from 'gatsby'

const SpotifyPlaylists = () => {
  const { items } = SpotifyJSONData
  console.log({ items })
  return (
    <ul>
      {
        items?.map(playlist => {
          const { images, name, external_urls } = playlist
          const image = images.length > 0 ? images[0] : null
          return (
            <Link key={name} to={external_urls?.spotify} target="_blank">
              <img alt={name} src={image?.url} height={180} width={180} />
              <p>{name}</p>
            </Link>
          )
        })
      }
    </ul>
  )
}

export default SpotifyPlaylists