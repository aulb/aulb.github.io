import * as React from 'react'
import PlaylistsGenres from '../data/playlists_and_genres.json'
import {
  playlistCube,
  playlistCubeContainer,
} from './SpotifyGenreVisualizations.module.css'

const SpotifyGenreVisualizations = ({limit}) => {
  const playlistsGenres = PlaylistsGenres.sort((playlistA, playlistB) => {
    const createdAtA = new Date(playlistA.created_at)
    const createdAtB = new Date(playlistB.created_at)
    if (createdAtA > createdAtB) return -1;
    if (createdAtA < createdAtB) return 1;
    return 0
  }).slice(0, limit != null ? limit : PlaylistsGenres.length)

  return (
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
            <div key={`${playlist.name}-spotgenre`} className={playlistCubeContainer}>
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
                    <div key={`${playlist.name}-${genre}-${index}`} title={genre["name"]} className={playlistCube} style={{
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
  )
}

export default SpotifyGenreVisualizations
