import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Blog = (props: any) => {
  const data = useStaticQuery(graphql`
      query BlogQuery {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
            }
            id
            excerpt
          }
        }
      }
    `);
  return (
    data.allMdx.nodes.map(node => (
      <article key={node?.frontmatter?.id}>
      <h2>{node?.frontmatter?.title}</h2>
      <p>Posted: {node?.frontmatter?.date}</p>
      </article>
    ))
  );
};

export default Blog;
