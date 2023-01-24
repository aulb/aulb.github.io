import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          github
          instagram
          linkedin
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata