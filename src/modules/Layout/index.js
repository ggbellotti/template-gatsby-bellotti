import * as S from "./styles"

import Footer from "../Footer"
import GlobalStyle from "../Global"
import Menu from "../Menu"
import PropTypes from "prop-types"
import React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Menu />
      </TransitionPortal>
      <S.ContentMain>{children}</S.ContentMain>
      <Footer />
    </S.Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
