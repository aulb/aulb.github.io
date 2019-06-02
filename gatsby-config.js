module.exports = {
  siteMetadata: {
    title: `albert untung`,
    description: `albert untung software engineer`,
    github: `https://github.com/aulb`,
    linkedin: `https://linkedin.com/in/albert-untung`,
    instagram: `https://instagram.com/albert.untung`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  pathPrefix: `/`
};
