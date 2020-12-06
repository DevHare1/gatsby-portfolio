import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Toolbar, Typography } from "@material-ui/core"
import "../pages/index"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuDiv: {
    margin: "auto",
    cursor: "pointer",
  },
  menuButton: {
    color: "#f2f2f2",
    fontSize: 18,
  },
  title: {
    flexGrow: 1,
  },
  tool: {
    maxWidth: 1080,
    marginRight: "auto",
    marginLeft: "auto",
    padding: 0,
    marginBottom: 0,
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar className={classes.tool}>
        <div className={classes.menuDiv}>
          <Typography variant="h6" className={classes.menuButton}>
            Home
          </Typography>
        </div>
        <div className={classes.menuDiv}>
          <Typography variant="h6" className={classes.menuButton}>
            About
          </Typography>
        </div>
        <div className={classes.menuDiv}>
          <Typography variant="h6" className={classes.menuButton}>
            Portfolio
          </Typography>
        </div>
        <div className={classes.menuDiv}>
          <Typography variant="h6" className={classes.menuButton}>
            Contact
          </Typography>
        </div>
      </Toolbar>
    </div>
  )
}
