import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Header = () => {
  const data = useSiteMetadata()

  return (
    <header>
      <h1>{data?.title}</h1>
    </header>
  )
}

export default Header