import { graphql, useStaticQuery } from "gatsby"

import BannerFullWidth from "@/BannerFullWidth"
import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Quadrinista, Roteirista Ilustrador e Professor"
        description="Quadrinista, Roteirista, Ilustrador e Professor; Confira alguns dos meus trabalhos."
      />
      <h1>Home</h1>
    </Layout>
  )
}

export default IndexPage
