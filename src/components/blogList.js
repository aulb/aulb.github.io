import * as React from 'react'
import { Link } from 'gatsby'

const BlogList = ({ posts }) => {
  return (
    <div>
      {
        posts?.nodes?.map((node) => (
          <article key={node?.id}>
            <Link to={`/blog/${node?.frontmatter?.slug}`}>
              {node?.frontmatter?.title}
            </Link>
          </article>
        ))
      }
    </div>
  )
}

export default BlogList
