import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import OppositeContentTimeline from "../components/Timeline"
import { Typography } from "@material-ui/core"
import { motion } from "framer-motion"

const useStyles = makeStyles(theme => ({
  aboutSect: {
    maxWidth: 1240,
    marginRight: "auto",
    marginLeft: "auto",
  },

  aboutHead: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: "2rem",
    paddingTop: "14vh",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "5%",
    maxWidth: 1080,
    marginTop: "1px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10vh",
    },
  },
  aboutDiv: {
    backgroundColor: "#f2f2f2",
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.aboutDiv}>
      <div className={classes.aboutSect} id="about">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={classes.aboutHead}
        >
          My Development Journey
        </motion.h2>
        <OppositeContentTimeline />
      </div>
    </div>
  )
}
