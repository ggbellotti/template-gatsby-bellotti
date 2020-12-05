import * as S from "./styles"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"
import Sharing from "@/Sharing"
import { graphql } from "gatsby"

const WorkPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <S.GlobalStyle />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.image === null
            ? post.frontmatter.image.childImageSharp.fluid.src
            : ""
        }
      />
      <S.TitlePost>{post.frontmatter.title}</S.TitlePost>
      <div
        className="publication"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
      <Sharing data={data} />
    </Layout>
  )
}
export const query = graphql`
  query Work($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image
      }
      html
    }
  }
`
export default WorkPost
