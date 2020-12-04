import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Partner from "../Partner"
import React from "react"
import SocialLink from "../SocialLink"

const Footer = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query noPartners {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/parceiros/" }
          frontmatter: { active: { eq: "yes" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              active
            }
          }
        }
      }
    }
  `)

  const noPartners = allMarkdownRemark.edges
  return (
    <S.Container>
      <S.FooterInfos>
        <S.Links>
          <S.Title>Contato</S.Title>
          <SocialLink />
        </S.Links>
        {noPartners.length === 0 ? (
          ""
        ) : (
          <S.Partners>
            <S.Title>Parceiros</S.Title>
            <Partner />
          </S.Partners>
        )}
      </S.FooterInfos>
    </S.Container>
  )
}

export default Footer
