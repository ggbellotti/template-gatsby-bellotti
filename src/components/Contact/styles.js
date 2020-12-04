import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  .email-contact {
    margin-top: 50px;
    color: #000;
    text-decoration: underline;
  }
`
export const Title = styled.h1`
  font-size: 3.375rem;
  font-family: Cookit;
  text-align: center;
`
export const InfosContact = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: underline;
    color: #000;
    margin-bottom: 25px;
    display: block;
  }
  ${media.lessThan("medium")`
    display: block;
  `}
`
export const Image = styled(Img)`
  width: 50%;
  margin-left: auto;
  max-width: 500px;
  ${media.lessThan("medium")`
    width: 100%;
    margin: 0 auto;
  `}
`
export const Texts = styled.div`
  width: 50%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`
export const BodyText = styled.div`
  h2 {
  }
  p {
  }
`
