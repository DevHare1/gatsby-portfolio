import React, { useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { useInView, enter, InView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const useStyles = makeStyles(theme => ({
  timeHead: {
    marginTop: -5,
    marginBottom: 5,
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10%",
      fontSize: 18,
      marginBottom: 0,
    },
  },
  timelineText: {
    marginBottom: "100%",
  },
}))

export default function TimelineMay() {
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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 2 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: "23%" },
      }}
    >
      <Typography variant="h5" className={classes.timeHead}>
        Hare Development
      </Typography>
      <Typography className={classes.timelineText}>
        After completing my Tech Degree I founded Hare Development and started
        Freelancing. I mostly used Wordpress or an HTML stack to build websites.
      </Typography>
    </motion.div>
  )
}
