import AniLink from "gatsby-plugin-transition-link/AniLink"
import { LinkTransition } from "@Modules/Buttons"
import styled from "styled-components"

export const Container = styled.nav`
  width: calc(100% - 150px);
  margin: 10px auto;
  padding: 0 75px;
  text-align: center;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    top: 0;
    height: ${({ open }) => (open ? "100%" : "0%")};
    overflow: auto;
  }
  @media (max-width: 575px) {
    padding: 0 15px;
    width: calc(100% - 30px);
  }
  .logo {
    .gatsby-image-wrapper {
      width: 175px;
      @media (max-width: 575px) {
        width: 150px;
      }
    }
  }
`
export const MenuToggle = styled.a`
  display: none;
  text-transform: uppercase;
  max-width: fit-content;
  /* width: 50px; */
  z-index: 99;
  position: fixed;
  right: 75px;
  @media (max-width: 1024px) {
    background-color: var(--secondary-color);
    color: var(--main-color);
    /* padding: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.125s ease;
    top: 15px;
    /* text-decoration: ${({ open }) => (open ? "underline" : "none")}; */
    span {
      /* display: block; */
      /* width: 33px;
      height: 2px; */
      /* margin-bottom: 6px; */
      /* position: relative; */
      /* background: white; */
      padding: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 575px) {
    right: 25px;
  }
  @media (max-width: 475px) {
    /* margin-right: 50px; */
  }
`
export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  transition: all 0s ease;
  z-index: 5;
  overflow: auto;
  @media (max-width: 1024px) {
    position: fixed;
    width: 100%;
    left: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: calc(100vh - 30px);
    padding-top: 30px;
    z-index: 98;
    top: 0;
    background-color: var(--main-color);
    transition: ${({ open }) => (open ? "all 0.25s ease" : "all 0s ease")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  }
  @media (max-height: 400px) and (max-width: 768px) {
    overflow-y: scroll;
    justify-content: end;
    height: calc(100vh - 100px);
    padding-top: 100px;
  }
`
export const NavItem = styled.li`
  margin: 0 15px;
  transition: all 0.5s ease;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin: 0;
    padding: 10px 0;
    &:first-of-type {
      padding-top: 0;
    }
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-100px)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-125px)"};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-150px)"};
    }
    &:nth-child(4) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-175px)"};
    }
    &:nth-child(5) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-200px)"};
    }
  }
`
export const NavLink = styled(LinkTransition)`
  text-decoration: none;
  background-color: var(--main-color);
  padding: 5px;
  color: #fff;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 50%;
    z-index: -1;
    border: none;
    outline: none;
    background-image: linear-gradient(
      45deg,
      var(--secondary-color),
      var(--secondary-color)
    );
    transition: 0.125s;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    right: 50%;
    z-index: -1;
    background-image: linear-gradient(
      135deg,
      var(--secondary-color),
      var(--secondary-color)
    );
    border: none;
    outline: none;
    transition: 0.125s;
  }
  &:hover {
    background-color: var(--secondary-color);
    color: var(--third-color);
  }
  @media (max-width: 1024px) {
    &::before {
      background-image: linear-gradient(
        45deg,
        var(--secondary-color),
        var(--secondary-color)
      );
    }
    &::after {
      background-image: linear-gradient(
        135deg,
        var(--secondary-color),
        var(--secondary-color)
      );
    }
  }
`
export const NavTransition = styled(AniLink)`
  text-decoration: none;
  padding: 5px;
  color: var(--secondary-color);
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 50%;
    z-index: -1;
    border: none;
    outline: none;
    background-image: linear-gradient(
      45deg,
      var(--fourth-color),
      var(--fourth-color)
    );
    transition: 0.125s;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    right: 50%;
    z-index: -1;
    background-image: linear-gradient(
      135deg,
      var(--fourth-color),
      var(--fourth-color)
    );
    border: none;
    outline: none;
    transition: 0.125s;
  }
  &:hover {
    color: var(--main-color);
    &::before {
      width: 50%;
    }
    &::after {
      width: 50%;
    }
  }
  @media (max-width: 1024px) {
    color: var(--main-color);
    &::before {
      background-image: linear-gradient(
        45deg,
        var(--fourth-color),
        var(--fourth-color)
      );
    }
    &::after {
      background-image: linear-gradient(
        135deg,
        var(--fourth-color),
        var(--fourth-color)
      );
    }
  }
  &.noneHover {
    &:hover {
      &::before {
        width: 0%;
      }
      &::after {
        width: 0%;
      }
    }
  }
`
export const Overlay = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: ${({ open }) => (open ? "4" : "-1")};
    /* transition: ${({ open }) =>
      open ? "all 0.05s ease" : "all 0s ease"}; */
    opacity: ${({ open }) => (open ? "1" : "0")};
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  }
`
