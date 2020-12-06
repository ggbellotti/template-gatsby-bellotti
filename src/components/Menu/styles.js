import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.nav`
  width: 100%;
  margin: 20px auto;
  text-align: center;
`
export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
`
export const NavItem = styled.li`
  margin: 10px 10px 10px;
  &:first-of-type {
    margin-left: 0;
  }
`
export const NavLink = styled(AniLink)`
  text-decoration: none;
  background-color: var(--main-color);
  padding: 5px;
  color: #fff;
  &:hover {
    background-color: var(--yellow-color);
    color: var(--green-color);
  }
`
