import styled from "styled-components"

export const Container = styled.div``
export const ButtonsShare = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: right;
  margin-top: 50px;
  p {
    font-size: 16px;
    text-align: right;
  }
`
export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
  button {
    margin: 0 8px 0 0;
    &:last-of-type {
      margin-right: -1px;
    }
    padding: 0;
  }
`
