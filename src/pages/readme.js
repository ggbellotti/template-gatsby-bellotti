import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const ReadmePage = () => {
  const MetadataReadme = useStaticQuery(graphql`
    query metadatareadme {
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
        title="Readme of Template GatsbyJS"
        description={MetadataReadme.site.siteMetadata.description}
      />
      <h1>Readme</h1>
    </Layout>
  )
}

export default ReadmePage
