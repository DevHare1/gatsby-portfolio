import React from "react"
import Sologo from "../images/my-logo.png"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  coverLogo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "3%",
    width: "80%",
    maxWidth: 1080,
  },
})

export default function Header() {
  const classes = useStyles()
  return <img className={classes.coverLogo} src={Sologo} atl="logo" />
}
