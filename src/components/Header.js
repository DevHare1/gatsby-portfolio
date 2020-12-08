import React from "react"
import Sologo from "../images/my-logo.png"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  coverLogo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "8%",
    paddingBottom: "8%",
    width: "80%",
    maxWidth: 1080,
    [theme.breakpoints.down("xs")]: {
      paddingTop: "20%",
      paddingBottom: "20%",
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  return <img className={classes.coverLogo} src={Sologo} atl="logo" />
}
