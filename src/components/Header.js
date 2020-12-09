import React from "react"
import Sologo from "../images/my-logo.png"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  coverLogo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "13%",
    paddingBottom: "8%",
    width: "80%",
    maxWidth: 1080,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20%",
      paddingBottom: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "30%",
      paddingBottom: "20%",
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div id="top" className="coverDiv">
      <img className={classes.coverLogo} src={Sologo} atl="logo" />
    </div>
  )
}
