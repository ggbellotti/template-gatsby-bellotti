import { graphql, useStaticQuery } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "@Modules/Layout"
import React from "react"
import SEO from "@Modules/SEO"

const IndexPage = () => {
  const Metadata = useStaticQuery(graphql`
    query metadata {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Template GatsbyJS"
        description={Metadata.site.siteMetadata.description}
      />
      <div style={{ textAlign: "center" }}>
        <h1>Home</h1>
        <p>{Metadata.site.siteMetadata.description}</p>
        <p>
          <a
            href="https://github.com/guilhermebellotti/template-gatsby-bellotti"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clone the repository
          </a>{" "}
          and quit editing and building your website. <br />
          For more information and details, see the{" "}
          <AniLink paintDrip hex="#223D8F" to="/readme">
            README
          </AniLink>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
