import * as React from "react"
import {
  card,
  cardImage,
  cardText,
  cardTextWrapper,
} from "./playlistCard.module.css"
import {useState} from "react"

const brightenColor = (color, brightness=0.75) => {
  return [
    Math.floor(color[0] + (255 - color[0]) * brightness),
    Math.floor(color[1] + (255 - color[0]) * brightness),
    Math.floor(color[2] + (255 - color[0]) * brightness),
  ]
}

const determineCardColor = genres => {
  if (genres == null) {
    return null
  }
  let totalCount = 0
  let rgb = [0, 0, 0]
  genres.map(genre => {
    const { color, count } = genre
    if (color == null || color.length !== 3) {
      return
    }

    totalCount = totalCount + genre.count
    rgb[0] = rgb[0] + count * color[0]
    rgb[1] = rgb[1] + count * color[1]
    rgb[2] = rgb[2] + count * color[2]
  })
  // Exaggerate the blue values
  rgb = [rgb[0] * 0.8, rgb[1] * 0.975, rgb[2] * 2.25]
  return rgb.map(value => Math.min(255, Math.floor(value / totalCount)))
}

const PlaylistCard = ({playlist, index, genres=null}) => {
  const [hover, setHover] = useState(false)
  const [isFront, setIsFront] = useState(true)

  const { images, name, external_urls, tracks, created_at } = playlist
  const image = images.length > 0 ? images[0] : null
  const createdAt = new Date(created_at);
  const createdAtStr = createdAt.toLocaleString("en-US", {month: "short", day: "2-digit"});
  const cardColor = brightenColor(determineCardColor(genres?.genres), 0.85)
  const cardColorHover = brightenColor(determineCardColor(genres?.genres), 0.8)
  const backgroundColorStyle = `rgb(${cardColor[0]}, ${cardColor[1]}, ${cardColor[2]})`
  const backgroundColorHoverStyle = `rgb(${cardColorHover[0]}, ${cardColorHover[1]}, ${cardColorHover[2]})`

  return (
    <div>
      <div 
        className={card} 
        style={{backgroundColor: hover ? backgroundColorHoverStyle : backgroundColorStyle}}
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        onClick={() => setIsFront(!isFront)}
      >
        <a href={external_urls.spotify} target="_blank">
            <img 
              alt={name} 
              src={image?.url}
              className={cardImage}   
              onClick={event => event.stopPropagation()} 
            />
        </a>
        <div className={cardTextWrapper}>
            <p className={cardText}>
              {index === 0 ? "📌" : ""} <strong>{name}</strong>
            </p>
            <p className={cardText}>
              {createdAtStr} · {tracks.total} {tracks.total > 1 ? "songs" : "song"}
            </p>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCard
