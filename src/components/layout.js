import * as React from 'react'
import {
  container,
  siteTitle,
} from './layout.module.css'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'
import Footer from './footer'

const Layout = ({ children, pageTitle = null }) => {
  const data = useSiteMetadata()
  return (
    <div className={container}>
      <Link to="/">
        <header className={siteTitle}>
          {
            pageTitle == null ? 
              data?.title :
              pageTitle
          }
        </header>
      </Link>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout