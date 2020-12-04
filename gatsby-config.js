const path = require("path")
require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Guilherme Bellotti`,
    description: `Template designed to facilitate the creation of websites with the Netlify CMS.`,
    author: `Guilherme Bellotti`,
    siteUrl: `https://guilhermebellotti.dev/`,
    email: `guibellotti@hotmail.com`,
    phone: `5511999996666`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/contents/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contato`,
        path: `${__dirname}/contents/contato`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-images-zoom",
          },
          `gatsby-remark-lazy-load`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "JetBrains Mono",
            weights: ["100", "400"],
          },
          {
            family: "Roboto Mono",
            weights: ["100", "400"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guilherme Bellotti`,
        short_name: `Guilherme Bellotti`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `static/img/icon-app.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-transition-link`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
