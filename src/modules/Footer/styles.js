import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  max-width: 100%;
  margin: 100px 0 50px 0;
  @media (max-width: 768px) {
    margin: 70px 0 25px 0;
    height: auto;
  }
  .email-contact {
    margin: 15px 0;
  }
  a {
    background-color: transparent;
    color: #000;
    &:hover {
      color: unset;
      background-color: unset;
    }
  }
`
export const FooterBody = styled.div`
  h1,
  h2 {
    font-size: 1rem;
  }
`
