import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Toolbar, Typography, AppBar } from "@material-ui/core"
import "../pages/index"
import scrollTo from "gatsby-plugin-smoothscroll"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuDiv: {
    margin: "auto 80px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "auto 40px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto 8px",
    },
  },
  menuButton1: {
    color: "#feea9f",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton2: {
    color: "#feb76d",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton3: {
    color: "#ee7364",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton4: {
    color: "#c06e7d",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  title: {
    flexGrow: 1,
  },
  navDiv: {
    maxWidth: 1080,
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
  },
  tool: {
    marginRight: "auto",
    marginLeft: "auto",
    padding: 0,
    marginBottom: 0,
  },
  app: {
    backgroundColor: "#000",
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <React.Fragment>
        <div className={classes.tool}>
          <AppBar position="fixed" className={classes.app}>
            <Toolbar>
              <div className={classes.navDiv}>
                <div
                  className={classes.menuDiv}
                  onClick={() => scrollTo("#top")}
                  role="button"
                >
                  <Typography variant="h6" className={classes.menuButton1}>
                    Home
                  </Typography>
                </div>
                <div
                  className={classes.menuDiv}
                  onClick={() => scrollTo("#about")}
                  role="button"
                >
                  <Typography variant="h6" className={classes.menuButton2}>
                    About
                  </Typography>
                </div>
                <div
                  className={classes.menuDiv}
                  onClick={() => scrollTo("#portfolio")}
                  role="button"
                >
                  <Typography variant="h6" className={classes.menuButton3}>
                    Portfolio
                  </Typography>
                </div>

                <div
                  className={classes.menuDiv}
                  onClick={() => scrollTo("#contact")}
                  role="button"
                >
                  <Typography variant="h6" className={classes.menuButton4}>
                    Contact
                  </Typography>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </React.Fragment>
    </div>
  )
}
