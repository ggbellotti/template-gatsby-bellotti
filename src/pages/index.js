import { graphql, useStaticQuery } from "gatsby"

import BannerFullWidth from "@/BannerFullWidth"
import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ImgHome {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/bannerHome/" }
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
        title="Quadrinista, Roteirista Ilustrador e Professor"
        description="Quadrinista, Roteirista, Ilustrador e Professor; Confira alguns dos meus trabalhos."
        image={
          allMarkdownRemark.length > 0
            ? allMarkdownRemark.nodes[0].frontmatter.image.childImageSharp.fluid
                .src
            : ""
        }
      />
      <BannerFullWidth />
    </Layout>
  )
}

export default IndexPage
