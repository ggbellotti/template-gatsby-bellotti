import * as S from "@/Layout/styles"

import Footer from "@/Footer"
import GlobalStyle from "@/Global/styles"
import Menu from "@/Menu"
import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <Menu />
      <section>{children}</section>
      <Footer />
    </S.Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
