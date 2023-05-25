import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import BlogList from '../../components/blogList'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  console.log({data})
  return (
    <Layout pageTitle="albert's notes">
      <BlogList posts={data?.allMdx} />
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMdx(
      sort: { frontmatter: { date: DESC }}
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "dddd MMMM D, YYYY")
          title
          slug
          location
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage