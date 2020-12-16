import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import OppositeContentTimeline from "../components/Timeline"
import { Typography } from "@material-ui/core"
import { useInView, enter, InView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

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
      fontSize: "26px",
      width: "90%",
      paddingTop: "10vh",
    },
  },
  aboutDiv: {
    backgroundColor: "#f2f2f2",
  },
}))

export default function Home() {
  const classes = useStyles()
  const controls = useAnimation()
  const [ref, InView, entry] = useInView()

  useEffect(() => {
    if (InView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, InView])

  return (
    <div className={classes.aboutDiv}>
      <div className={classes.aboutSect} id="about">
        <motion.h2
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className={classes.aboutHead}
        >
          My Development Journey
        </motion.h2>
        <OppositeContentTimeline />
      </div>
    </div>
  )
}
