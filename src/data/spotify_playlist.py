import spotipy
import json
from collections import Counter
from spotipy.oauth2 import SpotifyClientCredentials

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials())
playlists = sp.user_playlists('_aulb')
users_playlists = playlists["items"]
playlists_and_genres = []

f = open("genre_color.json")
data = json.load(f)
genre_color_map = {}
for item in data:
    genre_color_map[item["name"]] = {
        "color": item["color"],
        "pca": item["pca"],
    }
f.close()

# {
#   "NAME": "NAME",
#   "GENRES": [GENRE1, GENRE2, ...],
#   "CREATED_TIME": "CREATED_TIME"
# }
def make_genre_from_genres_counter(genres_counter):
    genres = []
    for genre_name in genres_counter:
        current_genre = genre_color_map.get(genre_name)
        if current_genre is None:
            print(genre_name)
            continue
        genres.append({
            "name": genre_name,
            "count": genres_counter[genre_name],
            "color": current_genre.get("color"),
            "pca": current_genre.get("pca"),
        })
    return genres

for playlist in users_playlists:
    if playlist["public"] != True:
        continue

    playlist_result = {
        "name": playlist["name"],
    }

    playlist_genres = []
    id = playlist["id"]
    playlist_obj = sp.playlist(id)
    items = playlist_obj["tracks"]["items"]
    created_at = ""

    for index, item in enumerate(items):
        current_track_genres = []
        track = item["track"]
        if track is None:
            continue
        # Approximation for creation date
        if index == 0:
            created_at = item["added_at"] 
        print(track["name"])
        album = track["album"]
        album_genres = album.get("genres", None)
        if album_genres is not None:
            current_track_genres.extend(album_genres)
            continue
        
        artists = track["artists"]
        for artist_obj in artists:
            artist_uri = artist_obj["uri"]
            try:
                artist = sp.artist(artist_uri)
            except Exception:
                continue
            artist_genres = artist.get("genres", None)
            if artist_genres is not None:
                current_track_genres.extend(artist_genres)
        playlist_genres.extend(current_track_genres)
    playlist_genres_counter = Counter(playlist_genres)
    playlist_result["genres"] = make_genre_from_genres_counter(playlist_genres_counter)
    playlist_result["created_at"] = created_at
    playlists_and_genres.append(playlist_result)

with open("playlists_and_genres.json", "w") as result:
    result.write(json.dumps(playlists_and_genres, indent=2))