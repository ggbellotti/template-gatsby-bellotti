import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import { Image } from "@Modules/Image"
import React from "react"

const AllPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query blogPosts {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { active: { eq: "yes" } }
        }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              publicURL
            }
          }
        }
      }
    }
  `)
  const posts = allMarkdownRemark.nodes
  return (
    <S.Container>
      <S.Wrapper>
        {posts.map(
          ({
            id,
            fields: { slug },
            frontmatter: {
              title,
              description,
              image: { publicURL },
            },
          }) => (
            <S.Item key={id} to={slug}>
              <S.ItemBg>
                <Image name={publicURL} alt={description} />
              </S.ItemBg>
              <S.Infos>
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.ItemDescription>{description}</S.ItemDescription>
              </S.Infos>
            </S.Item>
          )
        )}
      </S.Wrapper>
    </S.Container>
  )
}

export default AllPosts
