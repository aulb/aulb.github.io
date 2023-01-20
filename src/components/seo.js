import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Seo = ({ title }) => {
  const data = useSiteMetadata()
  return (
    <title>
      {title == null ? "" : `${title} | `}{data?.title}
    </title>
  )
}

export default Seo