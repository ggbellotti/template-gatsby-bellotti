import { AnchorLink } from "gatsby-plugin-anchor-links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const LinkTransition = styled(AniLink)`
  transition: all 0.225s ease-in-out;
`
export const LinkAnchor = styled(AnchorLink)`
  transition: all 0.225s ease-in-out;
`
export const LinkNormal = styled.a`
  transition: all 0.225s ease-in-out;
`
