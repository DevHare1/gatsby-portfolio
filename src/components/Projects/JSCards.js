import React from "react"
import PhotoGallery from "../ProjectCards/PhotoGallery"
import WebAppDash from "../ProjectCards/WebApp"
import GameShowApp from "../ProjectCards/GameShow"
import APIGen from "../ProjectCards/APIGen"
import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyItems: "center",
    justifyContent: "space-around",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 350,
  },
}))

export default function Wordpress() {
  const classes = useStyles()

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item sm className={classes.paper}>
        <PhotoGallery />
      </Grid>
      <Grid item sm className={classes.paper}>
        <GameShowApp />
      </Grid>
      <Grid item sm className={classes.paper}>
        <WebAppDash />
      </Grid>
      <Grid item sm className={classes.paper}>
        <APIGen />
      </Grid>
    </Grid>
  )
}
