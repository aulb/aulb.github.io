import * as React from 'react'
import SpotifyJSONData from '../data/current_playlist.json'
import PlaylistsGenres from '../data/playlists_and_genres.json'
import { Link } from 'gatsby'
import {
  playlistMainContainer,
  playlistContainer,
  playlistCube,
  playlistCubeContainer,
} from './spotifyPlaylists.module.css'

const SpotifyPlaylists = () => {
  const { items } = SpotifyJSONData
  const playlistsGenres = PlaylistsGenres.sort((playlistA, playlistB) => {
    const createdAtA = new Date(playlistA.created_at)
    const createdAtB = new Date(playlistB.created_at)
    if (createdAtA > createdAtB) return -1;
    if (createdAtA < createdAtB) return 1;
    return 0
  })
  return (
    <div>
      {/* <div className={playlistMainContainer}>
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
      </div> */}
      <div>
        {
          playlistsGenres?.map(playlist => {
            let totalGenreXCounter = 0
            let genreWidthBuffer = 0
            const sortedGenres = playlist?.genres?.sort((genreA, genreB) => {
              if (genreA.pca > genreB.pca) return -1;
              if (genreA.pca < genreB.pca) return 1;
              return 0
            }) || []
            sortedGenres.forEach(genre => {
              totalGenreXCounter = totalGenreXCounter + genre["count"]
            })
            return (
              <div className={playlistCubeContainer}>
                {
                  sortedGenres?.map((genre, index) => {
                    const color = genre["color"]
                    const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                    let width = parseFloat((genre["count"] / totalGenreXCounter * 100).toFixed(2))
                    genreWidthBuffer = index !== sortedGenres.length - 1 ? genreWidthBuffer + width : genreWidthBuffer
                    if (index === sortedGenres.length - 1) {
                      const overshoot = parseFloat(Math.abs(100 - genreWidthBuffer).toFixed(2))
                      if (genreWidthBuffer >= 100) {
                        width = width - overshoot
                      } else {
                        width = width + overshoot
                      }
                    }
                    return (
                      <div title={genre["name"]} className={playlistCube} style={{
                        background: rgb,
                        width: `${width.toFixed(2)}%`,
                      }} />
                    )
                  })
                }
              </div>
            )
          })
        }        
      </div>
    </div>
  )
}

export default SpotifyPlaylists