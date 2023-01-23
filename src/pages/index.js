import * as React from 'react'
import Layout from '../components/layout'
import BlogList from '../components/blogList'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = ({ data }) => {
  const { allMdx } = data

  return (
      <Layout>
        <p>
          Software engineer, currently based in San Francisco. I have <Link to="/blog">some writing here</Link>.
        </p>
        <BlogList posts={allMdx} />
      </Layout>
    )
}

export const Head = () => (
  <>
    <Seo />
    <meta name="description" content="albert.wtf" />
  </>
)

export const query = graphql`
  query LandingPageQuery {
    allMdx(
      limit: 5,
      sort: { frontmatter: { date: DESC }}
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