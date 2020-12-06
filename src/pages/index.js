import React from "react"
import Header from "../components/Header"
import SimpleTabs from "../components/ProjectSection"
import "../styles.css"
import Background from "../images/merry-christmas.jpg"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import OppositeContentTimeline from "../components/Timeline"
import Form from "../components/ContactForm"

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
  contactSect: {
    maxWidth: 1080,
    textAlign: "center",
    margin: "3% 3%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  contactHead: {
    textAlign: "center",
    fontWeight: 200,
    marginTop: "20vh",
    fontSize: "2rem",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1080,
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

        <div className={classes.aboutSect} id="about">
          <h2 className={classes.aboutHead}>My Coding Journey</h2>
          <OppositeContentTimeline />
        </div>
        <div className={classes.projectSect} id="projects">
          <h2 className={classes.projectsHead}>Portfolio</h2>
          <SimpleTabs />
        </div>
        <h2 className={classes.contactHead}>Contact Me</h2>
        <div className={classes.contactSect} id="contact">
          <Form />
        </div>
      </div>
    </ThemeProvider>
  )
}
