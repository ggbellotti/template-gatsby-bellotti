import * as S from "./styles"

import React, { useEffect, useState } from "react"

// import Logo from "@Modules/Logo"
import links from "./content"

const Menu = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      document.body.classList.toggle("showMenu", open)
    }
  }, [open])
  return (
    <S.Container open={open}>
      {/* <div className="logo">
        <S.NavTransition
          paintDrip
          bg="var(--main-color)"
          className="noneHover"
          to="/"
        >
          <Logo />
        </S.NavTransition>
      </div> */}
      <S.MenuToggle
        open={open}
        href="#menu"
        title={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Close" : "Menu"}</span>
      </S.MenuToggle>
      <S.Navbar open={open}>
        {links.map((link, i) => (
          <S.NavItem key={i} open={open} onClick={() => setOpen(!open)}>
            <S.NavLink to={link.url} title={link.label} />
          </S.NavItem>
        ))}
      </S.Navbar>
      <S.Overlay open={open} />
    </S.Container>
  )
}

export default Menu
