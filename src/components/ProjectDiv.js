import React, { useEffect } from "react"
import SimpleTabs from "../components/ProjectSection"
import "../styles.css"
import { makeStyles } from "@material-ui/core/styles"
import { useInView, enter, InView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const useStyles = makeStyles(theme => ({
  projectsHead: {
    textAlign: "center",
    fontWeight: 500,
    paddingTop: "14vh",
    fontSize: "2rem",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "3%",
    maxWidth: 1080,
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
      width: "90%",
      paddingTop: "10vh",
    },
  },
  projectSect: {
    paddingBottom: "2%",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10%",
    },
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
    <div className={classes.projectSect} id="portfolio">
      <motion.h2
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className={classes.projectsHead}
      >
        Portfolio
      </motion.h2>
      <SimpleTabs />
    </div>
  )
}
