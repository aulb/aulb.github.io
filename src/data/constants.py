import json

### 
# Create a genre to color map
# From every noise at once
GENRE_COLOR_MAP = {}
with open("genre_color.json") as genre_color_file:
    for item in json.load(genre_color_file):
        GENRE_COLOR_MAP[item["name"]] = {
            "color": item["color"],
            "pca": item["pca"],
        }
###

