/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Albert's Notes`,
    siteUrl: `https://www.albert.wtf`,
    description: `albert software engineer`,
    github: `https://github.com/aulb`,
    instagram: `https://instagram.com/albert.wootang`,
    linkedin: `https://linkedin.com/in/albert-untung`,
    goodreads: `https://goodreads.com/aulbert`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/icon/icon.png",
      },
    }, 
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