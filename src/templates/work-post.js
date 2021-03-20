import * as S from "./styles"

import Layout from "@Modules/Layout"
import React from "react"
import SEO from "@Modules/SEO"
import Sharing from "@Components/Sharing"
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
        className="markdown-body"
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
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              quality: 70
            )
          }
        }
      }
      html
    }
  }
`
export default WorkPost
