import * as React from "react"
import {
  card,
  cardImage,
  cardText,
  cardTextWrapper,
} from "./playlistCard.module.css"

const PlaylistCard = ({playlist, index}) => {
  const { images, name, external_urls, tracks, created_at } = playlist
  const image = images.length > 0 ? images[0] : null
  const createdAt = new Date(created_at);
  const createdAtStr = createdAt.toLocaleString("en-US", {month: "short", day: "2-digit"});
  return (
    <div className={card}>
    <a href={external_urls.spotify} target="_blank">
        <img className={cardImage} alt={name} src={image?.url} />
    </a>
    <div className={cardTextWrapper}>
        <p className={cardText}>{index === 0 ? "📌" : ""} <strong>{name}</strong></p>
        <p className={cardText}>{createdAtStr} · {tracks.total} {tracks.total > 1 ? "songs" : "song"}</p>
    </div>
    </div>
  )
}

export default PlaylistCard
