import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.nav`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  ${media.lessThan("medium")`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`
export const Overlay = styled.div`
  height: 100vh;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ open }) => (open ? "98" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: translateY(${({ open }) => (open ? "0%" : "-110%")});
  transition: all 0.105s ease;
  ${media.greaterThan("medium")`
    display: none;
  `}
`
export const MenuBurger = styled.div`
  z-index: 99;
`
export const Lines = styled.div`
  display: block;
  cursor: pointer;
  padding: 10px;
  transition: all 0.255s ease;
  z-index: 3;
  position: relative;
  @media (min-width: 769px) {
    display: none;
  }
  & span:nth-child(1) {
    transform: rotate(${({ open }) => (open ? "50deg" : "0")});
    transition: all 0.255s ease;
  }
  & span:nth-child(2) {
    transform: rotate(${({ open }) => (open ? "130deg" : "0")});
    margin-top: ${({ open }) => (open ? "-9px" : "0")};
    transition: all 0.255s ease;
  }
  & span:nth-child(3) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transition: all 0.255s ease;
  }
`
export const LineBurger = styled.span`
  width: 25px;
  height: 2px;
  background-color: #000;
  display: block;
  margin: 6px;
`
export const LinkLogo = styled(AniLink)`
  margin: 0 auto;
  display: block;
  width: 150px;
  z-index: 2;
  ${media.lessThan("medium")`
    margin: 0;
    width: 75px;
  `}
`
export const ListMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  z-index: 2;
  ${media.lessThan("medium")`
    opacity: ${({ open }) => (open ? "1" : "0")};
    margin-top: 45px;    
    transform: translateY(${({ open }) => (open ? "0%" : "-110%")});
    transition: all 0.255s ease;
    display: flex;
    position: absolute;
    height: 50vh;
    min-height: 250px;
    width: 100%;
    right: 0;
    top: 0;
    margin: 0;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 2px -2px rgba(255, 255, 255, .5);
    justify-content: center;
  `}
  li {
    margin: 0 27px;
    ${media.lessThan("medium")`
      margin: 10px 0;
    `}
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`
export const ListMenuLink = styled(AniLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  color: var(--ColorBlack);
  position: relative;
  display: block;
  transition: 0.095s ease-in-out;
  padding: 4px;
  &::before {
    content: "";
    height: 100%;
    position: absolute;
    background-color: black;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    display: block;
    width: 0%;
    transition: width 0.125s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: white;
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  &.active {
    color: white;
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  ${media.lessThan("medium")`
    font-size: 18px;
  `}
`
