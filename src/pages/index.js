import React from "react"
import Header from "../components/Header"
import "../styles.css"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import About from "../components/AboutDiv"
import Contact from "../components/Contact"
import Project from "../components/ProjectDiv"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Screenshot from "../../static/Screen-shot.png"

import Navbar from "../components/Navbar"

const useStyles = makeStyles({
  cover: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //minHeight: "100vh",
    [theme.breakpoints.down("lg")]: {
      minHeight: "40vh",
    },
  },
})

export default function Home({ data }) {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio - Devan Hare</title>
        <meta
          name="description"
          content="Front End Developer, based in Northwest Arkansas, who is passionate about using technology to turn a good idea into a quality user experience."
        />
        <meta property="og:url" content="https://www.devanhare.com" />
        <meta property="og:title" content="Portfolio - Devan Hare" />
        <meta
          property="og:description"
          content="Front End Developer, based in Northwest Arkansas, who is passionate about using technology to turn a good idea into a quality user experience."
        />
        <meta property="og:image" content={Screenshot} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://devanhare.com" />
      </Helmet>
      <div className={classes.site}>
        <div className={classes.cover}>
          <Navbar />
          <Header data={data} />
        </div>
        <About data={data} />
        <Project />

        <Contact />
      </div>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    about: file(relativePath: { eq: "devan-hare.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
