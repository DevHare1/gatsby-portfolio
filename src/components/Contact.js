import React from "react"
import "../styles.css"
import { makeStyles } from "@material-ui/core/styles"
import LinkedIn from "../images/linkedin.svg"
import Github from "../images/github-square.svg"
import Mail from "../images/envelope-square.svg"
import Phone from "../images/phone-square-alt.svg"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles({
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
    paddingTop: 10,
  },

  socialLink: {
    width: 40,
    margin: 10,
  },
})

export default function Contact() {
  const classes = useStyles()

  return (
    <div className={classes.contact}>
      <div className={classes.contactSect} id="contact">
        <Typography variant="h6" color="secondary">
          Let's Connect
        </Typography>
        <a href="tel: (737)932-4800">
          <img src={Phone} alt="Phone Link" className={classes.socialLink} />
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
          <img src={Github} alt="Github Link" className={classes.socialLink} />
        </a>
      </div>
    </div>
  )
}
