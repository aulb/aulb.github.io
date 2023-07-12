import * as React from "react"
import SpotifyJSONData from "../data/current_playlist.json"
import {
  card,
  cardImage,
  cardText,
  cardTextWrapper,
  cardContainer,
} from "./playlistCards.module.css"

const sortPlaylistByMostRecent = (playlistA, playlistB) => {
  const createdAtA = new Date(playlistA.created_at) 
  const createdAtB = new Date(playlistB.created_at) 
  if (createdAtA > createdAtB) return -1
  if (createdAtA < createdAtB) return 1
  return 0
}

const PlaylistCards = () => {
  const playlists = SpotifyJSONData.items
    .filter(playlist => playlist.public)
    .sort(sortPlaylistByMostRecent)
  
  const cards = playlists.map((playlist, index) => {
    const { images, name, external_urls, tracks, created_at } = playlist
    const image = images.length > 0 ? images[0] : null
    const createdAt = new Date(created_at);
    const createdAtStr = createdAt.toLocaleString("en-US", {month: "short", day: "2-digit"});
    return (
      <div className={card}>
        <a href={external_urls.spotify} target="_blank">
          <img className={cardImage} alt={name} src={image?.url} height={120} width={120} />
        </a>
        <div className={cardTextWrapper}>
          <p className={cardText}>{index === 0 ? "📌" : ""} <strong>{name}</strong></p>
          <p className={cardText}>{createdAtStr} · {tracks.total} {tracks.total > 1 ? "songs" : "song"}</p>
        </div>
      </div>
    )
  })

  return (
    <div className={cardContainer}>
      {cards}
    </div>
  )
}

export default PlaylistCards