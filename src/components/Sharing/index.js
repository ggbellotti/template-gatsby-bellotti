import * as S from "./styles"

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"

import React from "react"

const sizeIcons = 28

const Sharing = ({ data }) => {
  return (
    <S.ButtonsShare>
      <p>Compartilhe com os amigos</p>
      <S.Buttons>
        <WhatsappShareButton
          title={data.markdownRemark.frontmatter.title}
          separator=" - "
          url={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}
        >
          <WhatsappIcon round={true} size={sizeIcons} />
        </WhatsappShareButton>
        <FacebookShareButton
          title={data.markdownRemark.frontmatter.title}
          separator=" - "
          url={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}
          quote={data.markdownRemark.frontmatter.title}
          hashtag={data.site.siteMetadata.hashTag}
        >
          <FacebookIcon round={true} size={sizeIcons} />
        </FacebookShareButton>
        <TwitterShareButton
          title={data.markdownRemark.frontmatter.title}
          separator=" - "
          url={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}
          hashtag={data.site.siteMetadata.hashTag}
        >
          <TwitterIcon round={true} size={sizeIcons} />
        </TwitterShareButton>
        <LinkedinShareButton
          title={data.markdownRemark.frontmatter.title}
          summary={data.markdownRemark.frontmatter.description}
          source={
            data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug
          }
          separator=" - "
          url={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}
        >
          <LinkedinIcon round={true} size={sizeIcons} />
        </LinkedinShareButton>
        <TelegramShareButton
          title={data.markdownRemark.frontmatter.title}
          separator=" - "
          url={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}
        >
          <TelegramIcon round={true} size={sizeIcons} />
        </TelegramShareButton>
        <EmailShareButton
          subject={data.markdownRemark.frontmatter.title}
          separator=" - "
          body={data.markdownRemark.frontmatter.description}
          url={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}
        >
          <EmailIcon round={true} size={sizeIcons} />
        </EmailShareButton>
      </S.Buttons>
    </S.ButtonsShare>
  )
}

export default Sharing
