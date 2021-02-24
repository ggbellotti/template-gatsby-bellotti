import * as S from "./styles"

import { Image } from "@Modules/Image"
import React from "react"

const Logo = () => {
  return (
    <S.Logo className="logo">
      <Image name="logo.png" alt="Logo" />
    </S.Logo>
  )
}

export default Logo
