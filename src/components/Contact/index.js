import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import SocialLink from "@/SocialLink"

const Contact = () => {
  const { allMarkdownRemark, site } = useStaticQuery(graphql`
    query Contato {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/contato/" }
          frontmatter: { active: { eq: "yes" } }
        }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
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

  const contact = allMarkdownRemark.edges
  const email = site.siteMetadata.email
  return (
    <S.Container>
      <S.Title>
        {contact.length === 0 ? "Contato" : contact[0].node.frontmatter.title}
      </S.Title>
      {contact.length === 0 ? (
        <div style={{ display: "block", textAlign: "center", margin: "auto" }}>
          <h2 style={{ textAlign: "center", margin: "30px auto" }}>
            Deivide Allan
          </h2>
          <a className="email-contact" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      ) : (
        contact.map(
          ({
            node: {
              id,
              html,
              frontmatter: {
                image: {
                  childImageSharp: { fluid },
                },
              },
            },
          }) => (
            <S.InfosContact key={id}>
              <S.Texts>
                <S.BodyText dangerouslySetInnerHTML={{ __html: html }} />
                <a className="email-contact" href={`mailto:${email}`}>
                  {email}
                </a>
                <SocialLink />
              </S.Texts>
              <S.Image fluid={fluid} />
            </S.InfosContact>
          )
        )
      )}
    </S.Container>
  )
}

export default Contact
