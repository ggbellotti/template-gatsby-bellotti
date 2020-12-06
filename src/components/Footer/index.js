import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import SocialLink from "@/SocialLink"

const Footer = () => {
  const { allMarkdownRemark, site } = useStaticQuery(graphql`
    query footerData {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/contato/" }
          frontmatter: { active: { eq: "yes" } }
        }
        limit: 1
      ) {
        edges {
          node {
            html
            frontmatter {
              active
              description
              title
            }
          }
        }
      }
      site {
        siteMetadata {
          email
        }
      }
    }
  `)
  const infos = allMarkdownRemark.edges[0]
  const email = site.siteMetadata.email
  return (
    <S.Container>
      <S.FooterBody dangerouslySetInnerHTML={{ __html: infos.node.html }} />
      <a className="email-contact" href={`mailto:${email}`}>
        {email}
      </a>
      <SocialLink />
    </S.Container>
  )
}

export default Footer
