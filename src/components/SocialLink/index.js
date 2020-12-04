import * as S from "./styles"

import { Instagram, Twitter, Whatsapp } from "styled-icons/boxicons-logos"

import { EmailOutline } from "styled-icons/evaicons-outline"
import React from "react"

const SocialLink = () => {
  const socials = [
    {
      url: "https://www.instagram.com/deivide.allan/",
      label: "Instagram",
      icon: Instagram,
    },
    {
      url:
        "https://wa.me/5511985329490?&text=Olá,%20tudo%20bem?%20Meu%20nome%20é%20",
      label: "WhatsApp",
      icon: Whatsapp,
    },
    {
      url: "https://twitter.com/DeivideAlllan",
      label: "Twitter",
      icon: Twitter,
    },
    {
      url: "mailto:deivide.allan@outlook.com",
      label: "E-mail",
      icon: EmailOutline,
    },
  ]
  return (
    <S.Container>
      <S.Social>
        {socials.map((social, i) => {
          const Icon = social.icon
          return (
            <S.Links
              href={social.url}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
            >
              <Icon />
            </S.Links>
          )
        })}
      </S.Social>
    </S.Container>
  )
}

export default SocialLink
