# albert.wtf
This website is built using Gatsby.js. Just a simple website.

# Site structure
```
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
```

# Notes
- slug is a field for human-readable urls. I don't have to define slug, can just define other arbitrary fieldnames, slug is just the gatsby standard.
- Each page receives a data object. Notice the \`({ data })\` in the function param while the pages are being rendered.

# Manual deployment
Run `gatsby build` to generate a new public folder
Delete everything in master except CNAME, .gitignore
Copy everything from the public folder to master