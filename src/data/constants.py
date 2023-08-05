import json

### 
# Create a genre to color map
# From every noise at once
f = open("genre_color.json")
data = json.load(f)
GENRE_COLOR_MAP = {}
for item in data:
    GENRE_COLOR_MAP[item["name"]] = {
        "color": item["color"],
        "pca": item["pca"],
    }
f.close()
###
