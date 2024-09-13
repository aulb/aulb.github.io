import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { Link } from 'gatsby'

const Footer = () => {
  const data = useSiteMetadata()
  const { github, instagram, goodreads } = data
  return (
    <>
      <div>Software Engineer in San Francisco 🌉</div>
      <div>
          <Link to="https://www.google.com/maps/d/u/0/edit?mid=1a4om7EQLl9LV81wKUDGWtsgw3ZoJnnk&usp=sharing" target="_blank">🍽️ recs</Link>&nbsp;•&nbsp;
          <Link to="https://www.usajapan.org/japanese-language-classes/japanese-group-classes/" target="_blank">言語クラス</Link>&nbsp;•&nbsp;
          <Link to="https://www.clayroomsf.com/" target="_blank">pottery</Link>&nbsp;•&nbsp;
          <Link to="http://www.churchof8wheels.com/" target="_blank">rollerblades</Link>&nbsp;•&nbsp;
          <Link to="https://www.recurse.com/" target="_blank">Recurse Center</Link>&nbsp;•&nbsp;
          <Link to="http://nationalpokedex.github.io/" target="_blank">Pokédex</Link>
      </div>
      <div>
        <Link to={github} target="_blank">github</Link>
        &nbsp;•&nbsp;
        <Link to={instagram} target="_blank">ig</Link>
        &nbsp;•&nbsp;
        <Link to={goodreads} target="_blank">goodreads</Link>
        &nbsp;•&nbsp;
        <Link to="/copyright">&copy;</Link> 2014 - {(new Date()).getFullYear()}
      </div>
    </>
  )
}

export default Footer
