import styled from "styled-components"

export const NotificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  max-width: 320px;
  width: 90%;
  right: 0;
  left: 0;
  padding: 20px 10px;
  border: 1px solid var(--main-color);
  background: var(--main-color);
  color: var(--secondary-color);
  animation: moveUp 0.5s ease-in-out both;
  margin: 0 auto;
  cursor: pointer;
  p {
    margin: 0;
  }
  @keyframes moveUp {
    0% {
      bottom: 0;
    }
    100% {
      bottom: 60px;
    }
  }
`

export const IconWrapper = styled.div`
  margin-left: 10px;
  cursor: pointer;
  color: var(--secondary-color);
  width: 30px;
  height: 30px;
`
