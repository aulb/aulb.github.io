import * as React from "react"
import {
  card,
  cardScene,
  cardFace,
  cardFaceBack,
  cardFaceImage,
  cardFaceTextWrapper,
  cardFaceText,
  cardIsFlipped,
} from "./playlistCard.module.css"
import {useState} from "react"
import Marquee from "react-fast-marquee"
import PlaylistCardFace from './playlistCardFace'

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

const PlaylistCard = ({playlist, index, genres=null, track=null}) => {
  const [hover, setHover] = useState(false)
  const [isFront, setIsFront] = useState(true)

  const { 
    tracks, 
    created_at,
    name: playlistName, 
    images: playlistImage, 
    external_urls: playlistUrl, 
  } = playlist
  const image = playlistImage.length > 0 ? playlistImage[0] : null
  const createdAt = new Date(created_at)
  const createdAtStr = createdAt.toLocaleString("en-US", {month: "short", day: "2-digit"})
  const cardColor = brightenColor(determineCardColor(genres?.genres), 0.85)
  const cardColorHover = brightenColor(determineCardColor(genres?.genres), 0.8)
  const bgColorStyle = `rgb(${cardColor[0]}, ${cardColor[1]}, ${cardColor[2]})`
  const bgColorHoverStyle = `rgb(${cardColorHover[0]}, ${cardColorHover[1]}, ${cardColorHover[2]})`

  const {
    album,
    artists,
    name: trackName,
    external_urls: trackUrl,
  } = track

  const {
    images: albumImages,
  } = album
  const trackImage = albumImages.length === 3 ? albumImages[1] : null
  const trackNameComponent = trackName.length > 15 ? 
    <Marquee speed={35}>{trackName}<span>&nbsp;&nbsp;</span></Marquee> : trackName

  let artistsComponent = artists.map(
    (artist, index) => <span key={`${playlistName}-${artist.name}`}>
      <a href={artist.external_urls?.spotify} target="_blank"><i>{artist.name}</i></a>{index !== artists.length - 1 ? <span>,&nbsp;</span>: null}
    </span>
  )
  if (artists.reduce((acc, artist) => acc + artist.name.length, 0) > 15) {
    artistsComponent = <Marquee speed={35}>{artistsComponent}<span>&nbsp;&nbsp;</span></Marquee>
  }
  
  return (
    <div className={cardScene}>
      <div 
        onClick={() => setIsFront(!isFront)} 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        className={`${card} ${isFront ? null : cardIsFlipped}`}
      >
        <PlaylistCardFace 
          imageSrc={image?.url}
          imageUrl={playlistUrl.spotify}
          backgroundColor={hover ? bgColorHoverStyle : bgColorStyle}
          mainTextComponent={<span>{index === 0 ? "📌" : ""}<strong>{playlistName}</strong></span>}
          childTextComponent={<span>{createdAtStr} · {tracks.total} {tracks.total > 1 ? "songs" : "song"}</span>}
        />
        <PlaylistCardFace 
          imageSrc={trackImage.url}
          imageUrl={trackUrl.spotify}
          /* Hacky solution to apply background to back faces so the front face 
          doesn't show up. */
          backgroundColor={hover ? bgColorHoverStyle : bgColorStyle}
          mainTextComponent={<strong>{trackNameComponent}</strong>}
          childTextComponent={artistsComponent}
          frontFace={false}
        />
      </div>
    </div>
  )
}

export default PlaylistCard
