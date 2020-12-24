import React from "react"
import GatsbySite from "../ProjectCards/GatsbySite"
import ReactMovieSearch from "../ProjectCards/ReactMovieSearch"
import OfficeQuotes from "../ProjectCards/OfficeQuotes"
import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyItems: "center",
  },
  paper: {
    textAlign: "center",
    maxWidth: 355,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "none",
    },
  },
}))

export default function Wordpress() {
  const classes = useStyles()

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item sm className={classes.paper}>
        <GatsbySite />
      </Grid>
      <Grid item sm className={classes.paper}>
        <ReactMovieSearch />
      </Grid>
      <Grid item sm className={classes.paper}>
        <OfficeQuotes />
      </Grid>
    </Grid>
  )
}
