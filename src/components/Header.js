import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import "./header.css"
import { motion } from "framer-motion"

const useStyles = makeStyles(theme => ({
  coverDiv: {
    padding: "4%",
    backgroundColor: "#000",
    marginBottom: "none",
    boxShadow: "0px 5px 0px #303030",
  },
  coverTypography: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    paddingTop: "14%",
    paddingBottom: "10%",

    width: "90%",
    color: "#f2f2f2",
    maxWidth: 1248,
    [theme.breakpoints.down("md")]: {
      paddingTop: "20%",
      paddingBottom: "15%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "30%",
      paddingBottom: "20%",
    },
  },
  type: {
    fontSize: "70px",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
      fontWeight: 500,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      fontWeight: 500,
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div id="top" className={classes.coverDiv}>
      <div className={classes.coverTypography}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Typography id="test" variant="h1" className={classes.type}>
            Front-End Developer, based in Northwest Arkansas, who is passionate
            about using technology to turn a good idea into a quality user
            experience.
          </Typography>
        </motion.div>
      </div>
    </div>
  )
}
