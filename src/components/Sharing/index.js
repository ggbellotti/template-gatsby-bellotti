import * as S from "./styles"

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"

import React from "react"

const sizeIcons = 28

const Sharing = () => {
  const messageShare =
    "Check out this template made with GatsbyJS that Guilherme Bellotti developed"
  return (
    <S.ButtonsShare>
      <p>Share with the friends</p>
      <S.Buttons>
        <WhatsappShareButton
          title={messageShare}
          separator=" - "
          url="https://guilhermebellotti.dev/gatsby-template"
        >
          <WhatsappIcon round={true} size={sizeIcons} />
        </WhatsappShareButton>
        <FacebookShareButton
          title={messageShare}
          separator=" - "
          url="https://guilhermebellotti.dev/gatsby-template"
        >
          <FacebookIcon round={true} size={sizeIcons} />
        </FacebookShareButton>
        <TwitterShareButton
          title={messageShare}
          separator=" - "
          url="https://guilhermebellotti.dev/gatsby-template"
        >
          <TwitterIcon round={true} size={sizeIcons} />
        </TwitterShareButton>
      </S.Buttons>
    </S.ButtonsShare>
  )
}

export default Sharing
