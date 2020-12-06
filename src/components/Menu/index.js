import * as S from "./styles"

import React from "react"

const Menu = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.NavItem>
          <S.NavLink to="/">Home</S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to="/blog">Blog</S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to="/readme">Readme</S.NavLink>
        </S.NavItem>
      </S.Navbar>
    </S.Container>
  )
}

export default Menu
