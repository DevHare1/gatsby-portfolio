import React from "react"
import Header from "../components/Header"
import "../styles.css"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import About from "../components/AboutDiv"
import Contact from "../components/Contact"
import Project from "../components/ProjectDiv"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import Screenshot from "./images/Screenshot.png"

import Navbar from "../components/Navbar"

const useStyles = makeStyles({
  cover: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    [theme.breakpoints.down("lg")]: {
      minHeight: "40vh",
    },
  },
})

export default function Home({ data }) {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <SEO
        title="Devan Hare's Portfolio"
        description="I am a Front End Developer seeking a full time postion using React."
        image={Screenshot}
      />
      <div className={classes.site}>
        <div className={classes.cover}>
          <Navbar />
          <BackgroundImage
            Tag={`section`}
            id={`test`}
            fluid={data.background.childImageSharp.fluid}
          >
            <Header data={data} />
          </BackgroundImage>
        </div>
        <About />
        <Project />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "my-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    background: file(relativePath: { eq: "merry-christmas.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
