import React from "react"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import OppositeContentTimeline from "../components/Timeline"

const useStyles = makeStyles(theme => ({
  aboutSect: {
    maxWidth: 1080,
    marginRight: "auto",
    marginLeft: "auto",
  },
  aboutHead: {
    textAlign: "center",
    fontWeight: 200,
    fontSize: "2rem",
    paddingTop: "14vh",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "5%",
    maxWidth: 1080,
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10vh",
    },
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.aboutSect} id="about">
      <h2 className={classes.aboutHead}>My Coding Journey</h2>
      <OppositeContentTimeline />
    </div>
  )
}
