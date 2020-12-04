import { graphql, useStaticQuery } from "gatsby"

import Contact from "@/Contact"
import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const ContatoPage = () => {
  const profile = useStaticQuery(graphql`
    query ImgContato {
      file(relativePath: { eq: "deivide-allan.jpg" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Contato"
        description="Está pensando em fazer uma HQ ou quer sua ilustração? Entra em contato comigo"
        image={profile.file.childImageSharp.fluid.src}
      />
      <Contact />
    </Layout>
  )
}

export default ContatoPage
