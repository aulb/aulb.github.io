import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'

const Footer = () => {
  const data = useSiteMetadata()
  const { github, instagram, linkedin } = data
  return (
    <div>
      &copy; 2014 - {(new Date()).getFullYear()}
      &nbsp;•&nbsp;
      <Link to={github}>github</Link>
      &nbsp;•&nbsp;
      <Link to={instagram}>instagram</Link>
      &nbsp;•&nbsp;
      <Link to={linkedin}>linkedin</Link>
    </div>
  )
}

export default Footer
