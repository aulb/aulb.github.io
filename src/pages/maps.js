import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const MapsPage = () => {
  return (
      <Layout>
        <p>My Google maps links and recs:</p>
        <p>🎌 <Link to="https://www.google.com/maps/d/u/0/edit?mid=1-TdZDIqn2XhFIWw6eucttncrdub8jwE&usp=sharing" target="_blank">Japan trip 2023.</Link> Places visited and recommendations.</p>
        <p>🌁 <Link to="https://www.google.com/maps/d/u/0/edit?mid=1a4om7EQLl9LV81wKUDGWtsgw3ZoJnnk&usp=sharing" target="_blank">San Francisco food recommendations</Link>.</p>
      </Layout>
    )
}

export const Head = () => (
  <>
    <Seo />
    <meta name="description" content="albert.wtf" />
  </>
)

export default MapsPage
