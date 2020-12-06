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
