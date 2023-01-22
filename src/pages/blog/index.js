import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/blogLayout'
import BlogList from '../../components/blogList'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  const {japanesePosts, regularPosts} = data
  console.log({japanesePosts})
  return (
    <Layout pageTitle="My Blog Posts">
      <BlogList posts={japanesePosts} />
      <BlogList posts={regularPosts} />
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    regularPosts: allMdx(
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

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage