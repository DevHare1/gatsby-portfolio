import React from "react"
import Header from "../components/Header"
import SimpleTabs from "../components/ProjectSection"
import "../styles.css"
import Background from "../images/merry-christmas.jpg"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"
import OppositeContentTimeline from "../components/Timeline"
import LinkedIn from "../images/linkedin.svg"
import Github from "../images/github-square.svg"
import Mail from "../images/envelope-square.svg"
import Phone from "../images/phone-square-alt.svg"

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

        <div className={classes.aboutSect} id="about">
          <h2 className={classes.aboutHead}>My Coding Journey</h2>
          <OppositeContentTimeline />
        </div>
        <div className={classes.projectSect} id="projects">
          <h2 className={classes.projectsHead}>Portfolio</h2>
          <SimpleTabs />
        </div>
        <div className={classes.contact}>
          <div className={classes.contactSect} id="contact">
            <a href="tel: (737)932-4800">
              <img
                src={Phone}
                alt="Phone Link"
                className={classes.socialLink}
              />
            </a>
            <a href="mailto: haredevco@gmail.com">
              <img src={Mail} alt="Email Link" className={classes.socialLink} />
            </a>
            <a href="https://www.linkedin.com/in/devanhare/">
              <img
                src={LinkedIn}
                alt="LinkedIn Link"
                className={classes.socialLink}
              />
            </a>
            <a href="https://github.com/DevHare1">
              <img
                src={Github}
                alt="Github Link"
                className={classes.socialLink}
              />
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
