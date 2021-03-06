import React, { useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { useInView } from "react-intersection-observer"
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
  const [ref, InView] = useInView()

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
        hidden: { opacity: 0, x: "5%" },
      }}
    >
      <Typography variant="h5" className={classes.timeHead}>
        Continued Learning
      </Typography>
      <Typography className={classes.timelineText}>
        Shortly after starting at Square Six, I became even more motivated to
        expand my development knowledge and started adding frameworks like React
        and to my toolbelt. This site is actually built with Gatsby.
      </Typography>
    </motion.div>
  )
}
