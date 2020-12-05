import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  max-width: 100%;
  height: 60px;
  margin: 100px 0 50px 0;
  ${media.lessThan("medium")`
    margin: 70px 0 25px 0;
    height: auto;
  `}
`
export const FooterItems = styled.div``
