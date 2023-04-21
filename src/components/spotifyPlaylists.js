import * as React from 'react'
import SpotifyJSONData from '../data/current_playlist.json'
import { Link } from 'gatsby'
import {
  playlistMainContainer,
  playlistContainer,
} from './spotifyPlaylists.module.css'

const SpotifyPlaylists = () => {
  const { items } = SpotifyJSONData
  return (
    <div className={playlistMainContainer}>
      {
        items?.map(playlist => {
          if (playlist.public === false) {
            return null;
          }
          const { images, name, external_urls } = playlist
          const image = images.length > 0 ? images[0] : null
          return (
            <div className={playlistContainer} title={name}>
              <Link to={external_urls.spotify} target="_blank">
                <img alt={name} src={image?.url} height={90} width={90} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default SpotifyPlaylists