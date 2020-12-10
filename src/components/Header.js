import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

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

export default function Header({ data }) {
  const classes = useStyles()
  return (
    <div id="top" className="coverDiv">
      <div className={classes.coverLogo}>
        <Img fluid={data.logo.childImageSharp.fluid} atl="logo" />
      </div>
    </div>
  )
}
