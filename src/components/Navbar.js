import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Toolbar, Typography, AppBar } from "@material-ui/core"
import "../pages/index"
import scrollTo from "gatsby-plugin-smoothscroll"
import { motion } from "framer-motion"

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
    fontSize: 20,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton2: {
    color: "#feb76d",
    fontSize: 20,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton3: {
    color: "#ee7364",
    fontSize: 20,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton4: {
    color: "#c06e7d",
    fontSize: 20,
    fontWeight: 500,
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
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
    boxShadow: "0px 2px 3px #303030",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 5,
      paddingBottom: 5,
    },
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <React.Fragment>
        <motion.div
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
        >
          <div className={classes.tool}>
            <AppBar position="fixed" className={classes.app}>
              <Toolbar>
                <div className={classes.navDiv}>
                  <motion.div
                    className={classes.menuDiv}
                    whileHover={{ scale: [1, 1.2, 1, 1.2] }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => scrollTo("#top")}
                    role="button"
                  >
                    <motion.Typography
                      className={classes.menuButton1}
                      whileHover={{ color: "#f2f2f2" }}
                      variant="h6"
                    >
                      Home
                    </motion.Typography>
                  </motion.div>

                  <motion.div
                    className={classes.menuDiv}
                    whileHover={{ scale: [1, 1.2, 1, 1.2] }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => scrollTo("#about")}
                    role="button"
                  >
                    <motion.Typography
                      whileHover={{ color: "#f2f2f2" }}
                      variant="h6"
                      className={classes.menuButton2}
                    >
                      About
                    </motion.Typography>
                  </motion.div>
                  <motion.div
                    className={classes.menuDiv}
                    whileHover={{ scale: [1, 1.2, 1, 1.2] }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => scrollTo("#portfolio")}
                    role="button"
                  >
                    <motion.Typography
                      whileHover={{ color: "#f2f2f2" }}
                      variant="h6"
                      className={classes.menuButton3}
                    >
                      Portfolio
                    </motion.Typography>
                  </motion.div>

                  <motion.div
                    className={classes.menuDiv}
                    whileHover={{ scale: [1, 1.2, 1, 1.2] }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => scrollTo("#contact")}
                    role="button"
                  >
                    <motion.Typography
                      whileHover={{ color: "#f2f2f2" }}
                      variant="h6"
                      className={classes.menuButton4}
                    >
                      Contact
                    </motion.Typography>
                  </motion.div>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        </motion.div>
      </React.Fragment>
    </div>
  )
}
