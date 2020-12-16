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
        hidden: { opacity: 0, x: "-5%" },
      }}
    >
      <Typography variant="h5" className={classes.timeHead}>
        To be Continued
      </Typography>
      <Typography>
        I'm constantly learning and growing full time as a developer. If I'm not
        working on a project, I'm brushing up or learning something new. My goal
        is to eventually begin a career working full time with a solid company.
      </Typography>
    </motion.div>
  )
}
