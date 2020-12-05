import * as S from "./styles"

import React from "react"

const Menu = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.NavItem>
          <S.NavLink>Home</S.NavLink>
        </S.NavItem>
      </S.Navbar>
    </S.Container>
  )
}

export default Menu
