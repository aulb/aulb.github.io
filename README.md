# albert.wtf
This website is built using Gatsby.js. Just a simple website.

# Site structure
.
├── src
│  ├── components         > Include various layouts
│  ├── blog               > All blogpost
│  ├── pages
│  │  ├── blog
│  │  └── index.js
│  │  └── about.js
│  └── hooks              > Renaming this to utils someday
├── gatsby-node.js 
└── gatsby-config.js

# Notes
slug is a field for human-readable urls. I don't have to define slug, can just define other arbitrary fieldnames, slug is just the gatsby standard.