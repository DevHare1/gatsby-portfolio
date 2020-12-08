import React from "react"
import Header from "../components/Header"
import "../styles.css"
import Background from "../images/merry-christmas.jpg"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import About from "../components/AboutDiv"
import Contact from "../components/Contact"
import Project from "../components/ProjectDiv"

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  aboutSect: {
    maxWidth: 1080,
    margin: "5% 3%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  aboutHead: {
    textAlign: "center",
    fontWeight: 200,
    fontSize: "2rem",
    marginTop: "10vh",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "5%",
    maxWidth: 1080,
    paddingBottom: "2%",
  },
  projectsHead: {
    textAlign: "center",
    fontWeight: 200,
    marginTop: "20vh",
    fontSize: "2rem",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "2%",
    maxWidth: 1080,
  },
  contact: {
    backgroundColor: "#f1f1f1",
  },
  contactSect: {
    maxWidth: 1080,
    textAlign: "center",
    marginTop: "10%",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: 7,
    paddingTop: 7,
  },

  socialLink: {
    width: 40,
    margin: 10,
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.site}>
        <div className={classes.cover}>
          <Header />
        </div>
        <About />
        <Project />
        <Contact />
      </div>
    </ThemeProvider>
  )
}
