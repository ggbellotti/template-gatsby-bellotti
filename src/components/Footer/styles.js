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
export const Title = styled.h3`
  margin: 0 0 15px 0;
  text-align: center;
  font-size: 14px;
  ${media.lessThan("medium")`
    text-align: left;
  `}
`
export const FooterInfos = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: flex-end;
  ${media.lessThan("medium")`
    display: block;
    text-align: left;
    height: auto;
  `}
`
export const Links = styled.div`
  ${media.lessThan("medium")`
    margin-bottom: 30px;
  `}
`
export const Partners = styled.div``
