import * as React from 'react'
import SpotifyJSONData from '../data/current_playlist.json'
import { Link } from 'gatsby'
import {
  playlistMainContainer,
  playlistContainer,
} from './spotifyPlaylists.module.css'

const SpotifyPlaylists = () => {
  let { items: playlists } = SpotifyJSONData
  playlists = playlists
    .filter(playlist => playlist.public)
    .sort((playlistA, playlistB) => {
      const createdAtA = new Date(playlistA.created_at) 
      const createdAtB = new Date(playlistB.created_at) 
      if (createdAtA > createdAtB) return -1
      if (createdAtA < createdAtB) return 1
      return 0
    })

  return (
    <div className={playlistMainContainer}>
      {
        playlists?.map(playlist => {
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