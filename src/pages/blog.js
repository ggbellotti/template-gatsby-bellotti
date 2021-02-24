import AllPosts from "@Components/AllPosts"
import Layout from "@Modules/Layout"
import React from "react"
import SEO from "@Modules/SEO"

const BlogPage = () => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Confira alguns dos meus trabalhos ou leia as tirinhas diárias"
      />
      <h1>Blog</h1>
      <AllPosts />
    </Layout>
  )
}

export default BlogPage
