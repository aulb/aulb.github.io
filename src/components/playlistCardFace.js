import * as React from "react"
import {
  cardFace,
  cardFaceBack,
  cardFaceImage,
  cardFaceTextWrapper,
  cardFaceText,
} from "./playlistCardFace.module.css"

/* <div> cannot appear as a descendant of <p>. */
const PlaylistCardFace = ({
  imageSrc,
  imageUrl,
  backgroundColor, 
  mainTextComponent, 
  childTextComponent, 
  frontFace=true
}) => {
  return (
    <div 
      className={`${cardFace} ${!frontFace ? cardFaceBack : null}`}
      style={{backgroundColor}}
    >
      <a href={imageUrl} target="_blank">
        <img 
          alt="Image card URL" 
          src={imageSrc}
          className={cardFaceImage}
          onClick={event => event.stopPropagation()} 
        />
      </a>
      <div className={cardFaceTextWrapper}>
        <p className={cardFaceText}>
          {mainTextComponent}
        </p>
        <p className={cardFaceText}>
          {childTextComponent}
        </p>
      </div>
    </div>
  )
}

export default PlaylistCardFace
