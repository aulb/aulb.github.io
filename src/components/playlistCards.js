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
import PlaylistsGenres from '../data/playlists_and_genres.json'
import PlaylistsFaveTracks from '../data/playlists_and_fave_track.json'

const sortPlaylistByMostRecent = (playlistA, playlistB) => {
  const createdAtA = new Date(playlistA.created_at) 
  const createdAtB = new Date(playlistB.created_at) 
  if (createdAtA > createdAtB) return -1
  if (createdAtA < createdAtB) return 1
  return 0
}

const findItemInDictionaryByName = (dict, itemKey, name) => {
  const match = dict.filter(item => item[itemKey] === name)
  return match.length === 0 ? null : match[0]
}

const PlaylistCards = ({ 
  maxCard = 4, 
  includeHeader = true, 
  includeShowAll = true,
}) => {
  const [expanded, setExpanded] = useState(false)
  const playlists = SpotifyJSONData.items
    .filter(playlist => playlist.public)
    .sort(sortPlaylistByMostRecent)
    .slice(0, expanded ? SpotifyJSONData.items.length : maxCard)
  const shouldRenderShowAllContainer = includeHeader || includeShowAll

  return (
    <div className={mainContainer}>
      {
        shouldRenderShowAllContainer ?
          <div className={showAllContainer}>
            { includeShowAll ?
                <div onClick={() => setExpanded(!expanded)} className={showAllText}>
                  {
                    expanded ? "Show latest only" : "Show all"
                  }
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
        {
          playlists.map((playlist, index) => 
            <PlaylistCard 
              key={playlist.id} 
              playlist={playlist} 
              index={index} 
              genres={findItemInDictionaryByName(PlaylistsGenres, 'name', playlist.name)} 
              track={findItemInDictionaryByName(PlaylistsFaveTracks, 'playlist_name', playlist.name)}
            />
          )
        }
      </div>
    </div>
  )
}

export default PlaylistCards
