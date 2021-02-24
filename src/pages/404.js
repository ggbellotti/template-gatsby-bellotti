import Layout from "@Modules/Layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "@Modules/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{ textAlign: "center" }}>
      Oh... I didn't find what you're looking for ...
    </h1>
    <p style={{ textAlign: "center" }}>
      But rest assured, I'll help you get back to the beginning
    </p>
    <p style={{ textAlign: "center" }}>
      <Link style={{ textAlign: "center", color: "#000" }} to="/">
        Back to home
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
