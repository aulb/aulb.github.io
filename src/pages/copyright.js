import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const CopyrightPage = () => {
  return (
    <Layout>
      <p>
        Unauthorized use and/or duplication of this material without express and written permission from this site’s author and/or owner is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to Albert Untung with appropriate and specific direction to the original content.
      </p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo />
    <meta name="description" content="copyright albert.wtf" />
  </>
)

export default CopyrightPage