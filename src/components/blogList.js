import * as React from 'react'
import { Link } from 'gatsby'

const BlogList = ({ posts }) => {
  return (
    <ul>
      {
        posts?.nodes?.map((node) => (
          <article key={node?.id}>
            <h2>
              <Link to={`/blog/${node?.frontmatter?.slug}`}>
                {node?.frontmatter?.title}
              </Link>
            </h2>
            <p>Posted: {node?.frontmatter?.date}</p>
            <p>{node?.excerpt}</p>
          </article>
        ))
      }
    </ul>
  )
}

export default BlogList
