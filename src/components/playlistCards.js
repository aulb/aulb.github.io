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

const MAX_CARDS = 4
const sortPlaylistByMostRecent = (playlistA, playlistB) => {
  const createdAtA = new Date(playlistA.created_at) 
  const createdAtB = new Date(playlistB.created_at) 
  if (createdAtA > createdAtB) return -1
  if (createdAtA < createdAtB) return 1
  return 0
}

const PlaylistCards = () => {
  const [shouldShowAll, setShouldShowAll] = useState(false)
  const playlists = SpotifyJSONData.items
    .filter(playlist => playlist.public)
    .sort(sortPlaylistByMostRecent)
    .slice(0, shouldShowAll ? SpotifyJSONData.items.length : MAX_CARDS)
  return (
    <div className={mainContainer}>
      <div className={showAllContainer}>
        <div onClick={() => setShouldShowAll(!shouldShowAll)} className={showAllText}>
          Show all
        </div>
        <div>
          <strong>My monthly playlist</strong>
        </div>
      </div>
      <div className={cardContainer}>
        {playlists.map((playlist, index) => <PlaylistCard playlist={playlist} index={index} />)}
      </div>
    </div>
  )
}

export default PlaylistCards
