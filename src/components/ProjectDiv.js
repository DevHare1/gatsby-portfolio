import React from "react"
import SimpleTabs from "../components/ProjectSection"
import "../styles.css"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"

const useStyles = makeStyles({
  projectsHead: {
    textAlign: "center",
    fontWeight: 200,
    paddingTop: "14vh",
    fontSize: "2rem",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "5%",
    maxWidth: 1080,
  },
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.projectSect} id="portfolio">
      <h2 className={classes.projectsHead}>Portfolio</h2>
      <SimpleTabs />
    </div>
  )
}
