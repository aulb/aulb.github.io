import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import {
  siteTitle,
} from "./header.module.css"

const Header = ({pageTitle}) => {
  const data = useSiteMetadata()
  return (
    <header className={siteTitle}>
      {
        pageTitle == null ? 
          data?.title :
          pageTitle
      }
    </header>
  )
}

export default Header
