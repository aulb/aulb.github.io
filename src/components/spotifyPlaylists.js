import * as React from 'react'
import SpotifyJSONData from '../data/current_playlist.json'
import { Link } from 'gatsby'
import {
  playlistContainer,
  playlistInfoContainer,
} from './spotifyPlaylists.module.css'

const SpotifyPlaylists = () => {
  const { items } = SpotifyJSONData
  console.log({ items })
  return (
    <div>
      {
        items?.map(playlist => {
          const { images, name, external_urls, tracks } = playlist
          const image = images.length > 0 ? images[0] : null
          return (
            <div className={playlistContainer}>
              <img alt={name} src={image?.url} height={120} width={120} />
              <div className={playlistInfoContainer}>
                <Link key={name} to={external_urls?.spotify} target="_blank">
                  <p>{name}</p>
                </Link>
                <p>{tracks?.total} songs</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SpotifyPlaylists