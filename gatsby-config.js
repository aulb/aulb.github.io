/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `albert's page`,
    siteUrl: `https://www.albert.wtf`,
    description: `albert software engineer`,
    github: `https://github.com/aulb`,
    instagram: `https://instagram.com/albert.wootang`,
    linkedin: `https://linkedin.com/albert-untung`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "images",
    //     "path": `${__dirname}/src/images`
    //   },
    //   __key: "images"
    // }, 
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "pages",
    //     "path": `${__dirname}/src/pages`
    //   },
    //   __key: "pages"
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ]
};