import React from "react"
import SimpleTabs from "../components/ProjectSection"
import "../styles.css"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  projectsHead: {
    textAlign: "center",
    fontWeight: 200,
    paddingTop: "14vh",
    fontSize: "2rem",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "3%",
    maxWidth: 1080,
  },
  projectSect: {
    paddingBottom: "2%",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10%",
    },
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.projectSect} id="portfolio">
      <h2 className={classes.projectsHead}>Portfolio</h2>
      <SimpleTabs />
    </div>
  )
}
