import styled from "styled-components"

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
`
export const Social = styled.div`
  display: flex;
`
export const Links = styled.a`
  margin: 0px 7px 0 7px;
  color: #000;
  text-decoration: none;
  svg {
    width: 25px;
    height: auto;
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`
