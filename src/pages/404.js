import Layout from "../components/Layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{ textAlign: "center" }}>
      Eita, não encontrei o que está procurando...
    </h1>
    <p style={{ textAlign: "center" }}>
      Mas fique tranquilo, vou te ajudar a voltar para o início
    </p>
    <p style={{ textAlign: "center" }}>
      <Link style={{ textAlign: "center", color: "#000" }} to="/">
        Voltar para o início
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
