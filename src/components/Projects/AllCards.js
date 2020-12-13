import React from "react"
import ThePointeCard from "../ProjectCards/ThePointe"
import WalkerCard from "../ProjectCards/WalkerEyeCare"
import OverlandCard from "../ProjectCards/OverlandRentals"
import LeahCard from "../ProjectCards/LeahCarvajal"
import HareDentCard from "../ProjectCards/HareDent"
import JohnsCard from "../ProjectCards/JohnsFamily"
import PhotoGallery from "../ProjectCards/PhotoGallery"
import GameShowApp from "../ProjectCards/GameShow"
import RegistrationForm from "../ProjectCards/RegistrationForm"
import MobileFirst from "../ProjectCards/MobileFirst"
import WebAppDash from "../ProjectCards/WebApp"
import HareDevelopment from "../ProjectCards/HareDevelopment"
import GatsbySite from "../ProjectCards/GatsbySite"
import APIGen from "../ProjectCards/APIGen"
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
        <OverlandCard />
      </Grid>
      <Grid item sm className={classes.paper}>
        <ThePointeCard />
      </Grid>
      <Grid item sm className={classes.paper}>
        <LeahCard />
      </Grid>
      <Grid item sm className={classes.paper}>
        <WalkerCard />
      </Grid>
      <Grid item sm className={classes.paper}>
        <JohnsCard />
      </Grid>
      <Grid item sm className={classes.paper}>
        <HareDentCard />
      </Grid>
      <Grid item sm className={classes.paper}>
        <HareDevelopment />
      </Grid>
      <Grid item sm className={classes.paper}>
        <GatsbySite />
      </Grid>

      <Grid item sm className={classes.paper}>
        <RegistrationForm />
      </Grid>
      <Grid item sm className={classes.paper}>
        <PhotoGallery />
      </Grid>
      <Grid item sm className={classes.paper}>
        <GameShowApp />
      </Grid>
      <Grid item sm className={classes.paper}>
        <MobileFirst />
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
