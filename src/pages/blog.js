import { graphql, useStaticQuery } from "gatsby"

import BlogPosts from "@/BlogPosts"
import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const BlogPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ImgBlog {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { active: { eq: "yes" } }
        }
        limit: 1
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          id
          frontmatter {
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Confira alguns dos meus trabalhos ou leia as tirinhas diárias"
        image={
          allMarkdownRemark.length > 0
            ? allMarkdownRemark.nodes[0].frontmatter.image.childImageSharp.fluid
                .src
            : ""
        }
      />
      <BlogPosts />
    </Layout>
  )
}

export default BlogPage
