import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import {
  siteTitle,
} from "./header.module.css"

const Header = ({pageTitle}) => {
  const data = useSiteMetadata()
  return (
    <h1 className={siteTitle}>
      {
        pageTitle == null ? 
          data?.title :
          pageTitle
      }
    </h1>
  )
}

export default Header
