import styled, { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  .publication{
    h1{
      font-size: 2rem;
      margin: 20px 0;
    }
    h2{
      margin: 20px 0;
    }
    pre{
      overflow: auto;
      margin: 15px 0;
      background-color: #c9c9c9;
      padding: 10px;
      &::-webkit-scrollbar {
        height: 8px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      &::-webkit-scrollbar-thumb {
        background: #888;
      }
    }
    .gatsby-resp-image-wrapper{
      max-width: 500px!important;
      margin: 15px 0;
    }
  }
`

export const TitlePost = styled.h1`
  font-size: 3.375rem;
  font-weight: normal;
  font-family: Cookit;
  text-align: center;
`
