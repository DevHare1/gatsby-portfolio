/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Portfolio - Devan Hare`,
    description: `Front End Developer, based in Northwest Arkansas, who is passionate about using technology to turn a good idea into a quality user experience.`,
    author: `Devan Hare`,
    siteUrl: `https://www.devanhare.com`,
    image: `static/Screen-shot.png`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-8YJRZYPSGX", // Google Analytics / GA
        ],
      },
    },
  ],
}
