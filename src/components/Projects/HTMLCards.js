import React from "react"
import RegistrationForm from "../ProjectCards/RegistrationForm"
import PhotoGallery from "../ProjectCards/PhotoGallery"
import WebAppDash from "../ProjectCards/WebApp"
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
        <RegistrationForm />
      </Grid>
      <Grid item sm className={classes.paper}>
        <PhotoGallery />
      </Grid>
      <Grid item sm className={classes.paper}>
        <WebAppDash />
      </Grid>
    </Grid>
  )
}
