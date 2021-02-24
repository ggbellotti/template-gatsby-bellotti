import * as S from "./styles"

import { EmailOutline } from "styled-icons/evaicons-outline"
import { Github } from "@styled-icons/boxicons-logos/Github"
import React from "react"
import { World } from "@styled-icons/boxicons-regular/World"

const SocialLink = () => {
  const socials = [
    {
      url: "mailto:guibellotti@hotmail.com",
      label: "E-mail",
      icon: EmailOutline,
    },
    {
      url: "https://github.com/guilhermebellotti",
      label: "GitHub",
      icon: Github,
    },
    {
      url: "https://guilhermebellotti.dev",
      label: "Guilherme Bellotti - Portfólio",
      icon: World,
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
