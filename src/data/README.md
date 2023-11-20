Manual update guide:
- Update current_playlist.json
1) Web API https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists ;
2) Limit up to 50 ; Make sure only public playlists
3) Can't go more than 50, make sure to stitch in the future
- Export spotipy secrets + key
- Run spotify_playlist.py
- Update playlist_and_fave_track.csv
1) Manually add playlist name
2) Manually add fave track (only one)
- Run playlist_and_fave_track.py
