import React from "react"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import OppositeContentTimeline from "../components/Timeline"

const useStyles = makeStyles({
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
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.aboutSect} id="timeline">
      <h2 className={classes.aboutHead}>My Coding Journey</h2>
      <OppositeContentTimeline />
    </div>
  )
}
