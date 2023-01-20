import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/blogLayout'
import Seo from '../../components/seo'

const createBlogList = (posts) => {
  return (
    <ul>
      {
        posts?.nodes?.map((node) => (
          <article key={node?.id}>
            <h2>
              <Link to={`/blog/${node?.frontmatter?.slug}`}>
                {node?.frontmatter?.title}
              </Link>
            </h2>
          <p>Posted: {node?.frontmatter?.date}</p>
          <p>{node?.excerpt}</p>
          </article>
        ))
      }
    </ul>
  )
}

const BlogPage = ({ data }) => {
  const {japanesePosts, regularPosts} = data

  return (
    <Layout pageTitle="My Blog Posts">
      {createBlogList(japanesePosts)}
      {createBlogList(regularPosts)}
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