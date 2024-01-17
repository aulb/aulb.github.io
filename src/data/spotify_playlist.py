import spotipy
import json
from collections import Counter
from spotipy.oauth2 import SpotifyClientCredentials
from constants import GENRE_COLOR_MAP

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials())
playlists = sp.user_playlists(user='_aulb',limit=50,offset=0) # Look at docs
playlists2 = sp.user_playlists(user='_aulb',limit=50,offset=50) # Look at docs
playlists["items"].extend(playlists2["items"])
users_playlists = playlists["items"]
playlists_and_genres = json.load(open("playlistS_and_genres.json", "r"))
track_list = json.load(open("tracks.json", "r"))
artist_list = json.load(open("artists.json", "r"))
done_with_playlist_ids = [
    "7i9k3xsEw03mGh2MWh3zcC",
    "65SONccIdzmwjOoIKsDwyx", # Up to 2024 JAN
    "2CVW40lIPwshTEUeW17d8U",
    # "1EAGTC67XJuYGZ5pZ5FAvD",
    "6SDGi04zltcrn1fFXhPADY",
    "2mwjuWadmLiwMNIGCBF6Fi",
    "4v11meeRUNLdHQl4BUTY2M",
    "4erOBcbfNUEP9VL1eglVHx",
    "2yvGSuxB9BkH40CDWJTQir",
    "6IjWdzrTONvBACYxa2o4YG",
    "6ITL40QlwYyGARKxKUXHCT",
    "0Px5HJxNcHFu9LiK3PguPu",
    "7A0Sq1SJYentcGgsS0tOx2",
    "6XAUAurJG62IcCYxIBW5ah",
    "2oPHpYUAKkM4YP68j76sAP",
    "09jBECb8tMhuERpZ8gFHjm",
    "7v3gjcrkhcJwx6l78VRINr",
    "7GkH1UnD6uzGpKD0Kqg1xO",
    "2auhDYD2RSAMjzcqGVPCOt",
    "3sUqUiz5CnGX6lQIXtkfD4",
    "4UwHp3FNxseM4nt6ltjyVx",
    "7oZ6XtTDzt0eFFUVBqAuus",
    "4EB9q0Eq1s1Kv8p0RVTpcg",
    "2aOY2vqyMt9zb939b6pzNU",
    "5z2qLus9VGUmWHEzqMRTus",
    "2nGWWsIF8WmUHGt2aZPT3O",
    "7D0oARSkDZoeKXWHI86H1t",
    "1Rrvcq3IRZ1Wd8qkAJQpY8",
    "2dbhbBqzjID5IzwrNec45l",
    "6HFv5uUB5EtNhS24y0kGH9",
    "2oYpIpGhKFfs53evgt9Jsy",
    "2BsVTf1btqSl64BPFCJPOA",
    "1fzp2XkR3LYMYw4FCZUrOV",
    "2qRKeKSXkWjGP8mWdaDRf6",
    "42drkmKKWHAEUuLxpBNGA9",
    "6rQL1kWK7BHQ1gL7BfJSSx",
    "1d95XcljtE93cnVMi6DsTY",
    "6MrCRqFuYCMZOtGIJzgRjN",
]

# # {
# #   "NAME": "NAME",
# #   "GENRES": [GENRE1, GENRE2, ...],
# #   "CREATED_TIME": "CREATED_TIME"
# # }
def make_genre_from_genres_counter(genres_counter):
    genres = []
    for genre_name in genres_counter:
        current_genre = GENRE_COLOR_MAP.get(genre_name)
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
    if id in done_with_playlist_ids:
        print(playlist["name"])
        continue
    playlist_obj = sp.playlist(id)
    items = playlist_obj["tracks"]["items"]
    created_at = ""

    for index, item in enumerate(items):
        current_track_genres = []
        track = item["track"]
        if track is None:
            continue
        ##### Create approximation for creation date here
        if index == 0:
            created_at = item["added_at"]
            playlist["created_at"] = item["added_at"]
        #####

        print(f"Track acquired {track['name']}")
        track_list.append(track)
        album = track["album"]
        album_genres = album.get("genres", None)
        if album_genres is not None:
            current_track_genres.extend(album_genres)
            continue

        artists = track["artists"]
        for artist_obj in artists:
            artist_uri = artist_obj["uri"]
            try:
                print("Getting artist")
                artist = sp.artist(artist_uri)
                print(f"Artist: {artist['name']}")
                artist_list.append(artist)
            except Exception:
                continue
            artist_genres = artist.get("genres", None)
            if artist_genres is not None:
                current_track_genres.extend(artist_genres)
        playlist_genres.extend(current_track_genres)
    playlist_genres_counter = Counter(playlist_genres)
    genres_analysis = make_genre_from_genres_counter(playlist_genres_counter)
    playlist_result["genres"] = genres_analysis
    playlist_result["created_at"] = created_at
    playlists_and_genres.append(playlist_result)

# Write to genres
with open("playlists_and_genres.json", "w") as result:
    result.write(json.dumps(playlists_and_genres))

# Write to current_playlist
with open("current_playlist.json", "w") as result:
    result.write(json.dumps(playlists, indent=2))

# Write to tracks
with open("tracks.json", "w") as result:
    result.write(json.dumps(track_list))

# Write to artist
with open("artists.json", "w") as result:
    result.write(json.dumps(artist_list))
