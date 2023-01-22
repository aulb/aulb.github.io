import * as React from 'react'
import Layout from '../components/layout'
import BlogList from '../components/blogList'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const { regularPosts, japanesePosts } = data

  return (
      <Layout pageTitle="Landing Page">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/paint.webp"
        />
        <BlogList posts={regularPosts} />
        <BlogList posts={japanesePosts} />
      </Layout>
    )
}

export const Head = () => (
  <>
    <Seo />
    <meta name="description" content="albert.wtf landing page" />
  </>
)

export const query = graphql`
  query LandingPageQuery {
    regularPosts: allMdx(
      limit: 3,
      sort: { frontmatter: { date: DESC }},
      filter: {
        frontmatter: {
          category: {
            eq: "post"
          }
        }
      }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
  japanesePosts: allMdx(
      limit: 3,
      sort: { frontmatter: { date: DESC }},
      filter: {
        frontmatter: {
          category: {
            eq: "japanese-post"
          }
        }
      }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
  }
`

export default IndexPage