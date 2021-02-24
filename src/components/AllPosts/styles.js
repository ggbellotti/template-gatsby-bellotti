import { LinkTransition } from "@Modules/Buttons"
import styled from "styled-components"

export const Container = styled.div``
export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ItemBg = styled.div`
  .gatsby-image-wrapper {
    min-height: 350px;
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
  min-height: 100px;
  justify-content: center;
  transition: all 0.225s ease-in-out;
`
export const ItemTitle = styled.div`
  font-size: 1.375rem;
  padding: 5px;
  color: #fff;
`
export const ItemDescription = styled.div`
  font-size: 0.625rem;
  padding: 5px;
  color: #fff;
`
export const Item = styled(LinkTransition)`
  margin: 10px;
  @media (max-width: 1024px) {
    margin: 0 0 15px 0;
  }
  &:hover {
    ${Infos} {
      background-color: var(--secondary-color);
    }
  }
`
