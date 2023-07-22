import * as React from "react"
import PlaylistCard from "./playlistCard"
import SpotifyJSONData from "../data/current_playlist.json"
import {
  showAllText,
  showAllContainer,
  mainContainer,
  cardContainer,
} from "./playlistCards.module.css"
import {useState} from "react";

const sortPlaylistByMostRecent = (playlistA, playlistB) => {
  const createdAtA = new Date(playlistA.created_at) 
  const createdAtB = new Date(playlistB.created_at) 
  if (createdAtA > createdAtB) return -1
  if (createdAtA < createdAtB) return 1
  return 0
}

const PlaylistCards = ({ 
  maxCard = 4, 
  includeHeader = true, 
  includeShowAll = true,
}) => {
  const [shouldShowAll, setShouldShowAll] = useState(false)
  const playlists = SpotifyJSONData.items
    .filter(playlist => playlist.public)
    .sort(sortPlaylistByMostRecent)
    .slice(0, shouldShowAll ? SpotifyJSONData.items.length : maxCard)
  const shouldRenderShowAllContainer = includeHeader || includeShowAll
  return (
    <div className={mainContainer}>
      {
        shouldRenderShowAllContainer ?
          <div className={showAllContainer}>
            { includeShowAll ?
                <div onClick={() => setShouldShowAll(!shouldShowAll)} className={showAllText}>
                  Show all
                </div> : <div></div>
            }
            {
              includeHeader ?
                <div>
                  <strong>My monthly playlist</strong>
                </div> : <div></div>
            }
          </div> : null
      }
      <div className={cardContainer}>
        {playlists.map((playlist, index) => <PlaylistCard playlist={playlist} index={index} />)}
      </div>
    </div>
  )
}

export default PlaylistCards
