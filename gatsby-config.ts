import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `albert.wtf`,
    siteUrl: `https://www.albert.wtf`,
    description: `albert untung software engineer`,
    github: `https://github.com/aulb`,
    linkedin: `https://linkedin.com/in/albert-untung`,
    instagram: `https://instagram.com/albert.wootang`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": "./src/blog/"
    },
    __key: "blog"
  }]
};

export default config;
