import * as React from 'react'
import Layout from '../components/layout'
import BlogList from '../components/blogList'
// import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = ({ data }) => {
  const { allMdx } = data

  return (
      <Layout pageTitle="Landing Page">
        {/* <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/paint.webp"
        /> */}
        <p>
          blablabla <Link to="/blog">some writing</Link>.
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
      sort: { frontmatter: { date: ASC }}
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