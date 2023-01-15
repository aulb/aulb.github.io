import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data?.allMdx?.nodes?.map((node) => (
          <article key={node?.id}>
            <h2>{node?.frontmatter?.title}</h2>
            <p>Posted: {node?.frontmatter?.date}</p>
            <p>{node?.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage