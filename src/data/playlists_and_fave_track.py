import csv
import json

PLAYLISTS_FAVE_TRACK = {}
with open("playlists_and_fave_track.csv") as fave_file:
    for row in csv.reader(fave_file):
        try:
            playlist_name, track_id = row
            PLAYLISTS_FAVE_TRACK[playlist_name] = track_id
        except Exception:
            pass

artists = []
with open("artists.json") as artist_file:
    artists = json.load(artist_file)

tracks = []
with open("tracks.json") as track_file:
    tracks = json.load(track_file)

result = []
for playlist_name in PLAYLISTS_FAVE_TRACK:
    fave_track_id = PLAYLISTS_FAVE_TRACK[playlist_name]
    track = list(filter(lambda track: track["id"] == fave_track_id, tracks))[0]
    del track["album"]["available_markets"]
    del track["available_markets"]
    track["playlist_name"] = playlist_name
    result.append(track)

with open("playlists_and_fave_track.json", "w") as fave_file:
    fave_file.write(json.dumps(result, indent=2))
