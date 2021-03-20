import * as S from "./styles"

import { StaticQuery, graphql } from "gatsby"

import React from "react"

const Image = ({ name, alt, className, id }) => (
  <StaticQuery
    query={graphql`
      query AllImages {
        allImagesWithoutSVGExtension: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            extension: { regex: "/jpeg|jpg|png|gif/" }
          }
        ) {
          nodes {
            publicURL
            extension
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                quality: 70
              )
            }
          }
        }
        allImagesWithSVGExtension: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            extension: { eq: "svg" }
          }
        ) {
          nodes {
            publicURL
            extension
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                quality: 70
              )
            }
          }
        }
      }
    `}
    render={({ allImagesWithoutSVGExtension, allImagesWithSVGExtension }) => {
      const isNameWithSVGExtension = name.indexOf("svg") !== -1

      const renderImageWithSVGExtension = () => {
        const image = allImagesWithSVGExtension.nodes.find(
          ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
        )
        return image ? (
          <img
            className={className ? className : ""}
            id={id ? id : ""}
            src={image.publicURL}
            alt={alt ? alt : ""}
            width={100}
            height={100}
          />
        ) : null
      }

      const renderImageWithoutSVGExtension = () => {
        const image = allImagesWithoutSVGExtension.nodes.find(
          ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
        )
        return image && image.childImageSharp.gatsbyImageData ? (
          <S.Img
            className={className ? className : ""}
            id={id ? id : ""}
            image={image.childImageSharp.gatsbyImageData}
            alt={alt ? alt : ""}
            title={alt ? alt : ""}
          />
        ) : null
      }

      return isNameWithSVGExtension
        ? renderImageWithSVGExtension()
        : renderImageWithoutSVGExtension()
    }}
  />
)

export { Image }
