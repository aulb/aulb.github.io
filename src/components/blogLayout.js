import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  siteTitle,
} from './layout.module.css'

const BlogLayout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <header className={siteTitle}>
        <Link to="/">
          {pageTitle}
        </Link>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default BlogLayout