import * as React from 'react'
import {
  container,
} from './layout.module.css'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'
import Footer from './footer'
import Header from './header'

const Layout = ({ children, pageTitle = null }) => {
  const data = useSiteMetadata()
  return (
    <div className={container}>
      <Link to="/" className="header">
        <Header pageTitle={pageTitle} data={data} />
      </Link>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
