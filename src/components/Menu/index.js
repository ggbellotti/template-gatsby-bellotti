import * as S from "./styles"

import React, { useEffect, useState } from "react"

import Logo from "@/Logo"

const Menu = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle("hiddenBar", open)
  }, [open])
  return (
    <S.Container>
      <S.Overlay open={open} onClick={() => setOpen(!open)} />
      <S.LinkLogo paintDrip hex="#000" to="/">
        <Logo />
      </S.LinkLogo>
      <S.MenuBurger>
        <S.Lines open={open} onClick={() => setOpen(!open)}>
          <S.LineBurger />
          <S.LineBurger />
          <S.LineBurger />
        </S.Lines>
        <S.ListMenu open={open}>
          <li>
            <S.ListMenuLink
              activeClassName="active"
              paintDrip
              hex="#000"
              to="/"
            >
              Inicio
            </S.ListMenuLink>
          </li>
          <li>
            <S.ListMenuLink
              activeClassName="active"
              paintDrip
              hex="#000"
              to="/blog"
            >
              Blog
            </S.ListMenuLink>
          </li>
          <li>
            <S.ListMenuLink
              activeClassName="active"
              paintDrip
              hex="#000"
              to="/cursos"
            >
              Cursos
            </S.ListMenuLink>
          </li>
          <li>
            <S.ListMenuLink
              activeClassName="active"
              paintDrip
              hex="#000"
              to="/shop"
            >
              Shop
            </S.ListMenuLink>
          </li>
          <li>
            <S.ListMenuLink
              activeClassName="active"
              paintDrip
              hex="#000"
              to="/contato"
            >
              Contato
            </S.ListMenuLink>
          </li>
        </S.ListMenu>
      </S.MenuBurger>
    </S.Container>
  )
}

export default Menu
