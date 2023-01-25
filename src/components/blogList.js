import * as React from 'react'
import { Link } from 'gatsby'
import {
  blogListContainer,
  articleSpacing,
} from './blogList.module.css'

const BlogList = ({ posts }) => {
  return (
    <div className={blogListContainer}>
      {
        posts?.nodes?.map((node) => (
          <article key={node?.id} className={articleSpacing}>
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
