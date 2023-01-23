import * as React from 'react'
import {
  container,
  siteTitle,
} from './layout.module.css'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
  const data = useSiteMetadata()

  return (
    <div className={container}>
      <Link to="/">
        <header className={siteTitle}>
          {data?.title}
        </header>
      </Link>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout