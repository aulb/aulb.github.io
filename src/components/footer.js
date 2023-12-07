import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'

const Footer = () => {
  const data = useSiteMetadata()
  const { github, instagram, linkedin, goodreads } = data
  return (
    <div>
      <Link to={github} target="_blank">github</Link>
      &nbsp;•&nbsp;
      <Link to={instagram} target="_blank">instagram</Link>
      &nbsp;•&nbsp;
      <Link to={linkedin} target="_blank">linkedin</Link>
      &nbsp;•&nbsp;
      <Link to={goodreads} target="_blank">goodreads</Link>
      &nbsp;•&nbsp;
      <Link to="/copyright">&copy;</Link> 2014 - {(new Date()).getFullYear()}
      </div>
  )
}

export default Footer
