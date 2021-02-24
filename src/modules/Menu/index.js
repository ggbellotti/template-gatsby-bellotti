import * as S from "./styles"

import React from "react"
import links from "./content"

const Menu = () => {
  return (
    <S.Container>
      <S.Navbar>
        {links.map((link, i) => (
          <S.NavItem key={i}>
            <S.NavLink to={link.url} title={link.label} />
          </S.NavItem>
        ))}
      </S.Navbar>
    </S.Container>
  )
}

export default Menu
