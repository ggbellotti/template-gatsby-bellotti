import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <S.LogoBlack className="logo" fluid={data.file.childImageSharp.fluid} />
  )
}

export default Logo
