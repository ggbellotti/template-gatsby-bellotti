import media from "styled-media-query"
import styled from "styled-components"
export const Wrapper = styled.main`
  width: calc(100% - 180px);
  max-width: 1440px;
  padding: 0 90px;
  margin: 0 auto;
  ${media.lessThan("large")`
    padding: 0 25px;
    width: calc(100% - 50px);
  `}
  ${media.lessThan("small")`
    width: calc(100% - 30px);
    padding: 0 15px;
  `}
`
