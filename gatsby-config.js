module.exports = {
  siteMetadata: {
    title: `🐧🐦🐤`,
    description: `albert untung software engineer, i have to put this so google rankings pick up my website`,
    github: `https://github.com/aulb`,
    linkedin: `https://linkedin.com/in/albert-untung`,
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
  pathPrefix: `/aulb.github.io`
};
