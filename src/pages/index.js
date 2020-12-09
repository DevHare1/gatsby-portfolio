import React from "react"
import Header from "../components/Header"
import "../styles.css"
import Background from "../images/merry-christmas.jpg"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import About from "../components/AboutDiv"
import Contact from "../components/Contact"
import Project from "../components/ProjectDiv"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Navbar from "../components/Navbar"

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(${Background})`,
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
      <div className={classes.site}>
        <div className={classes.cover}>
          <Navbar />
          <Header />
        </div>
        <About />
        <Project />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

/*export const query = graphql`
  query {
    logo: file(relativePath: { eq: "my-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`*/
