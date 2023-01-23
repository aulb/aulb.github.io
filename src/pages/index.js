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
          Hello! Welcome to my corner of the internet. 
          I'm currently a software engineer (for blue app) based out of San Francisco. 
          My current Spotify playlist of the month <Link to="/playlists">here</Link>. 
          Current interests includes Japanese-Korean-French language learning, studio pottery, very light reading, and coffee. 
          You can view some <Link to="/blog">posts I made in the past here</Link> , with some recent ones below.
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