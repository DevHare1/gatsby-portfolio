import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useInView, enter, InView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { Typography } from "@material-ui/core"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  about: {
    maxWidth: 1240,
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      paddingTop: "8vh",
    },
  },
  aboutPhotoDiv: {
    maxWidth: 1080,
  },
  photo: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
  aboutSect: {
    marginRight: "auto",
    marginLeft: "auto",
  },

  aboutHead: {
    paddingLeft: "5%",
    fontWeight: 500,
    fontSize: "2rem",
    paddingTop: "10vh",
    paddingBottom: "1%",
    maxWidth: 1080,
    marginTop: "1px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "auto",
      marginLeft: "auto",
      fontSize: "26px",
      width: "90%",
      paddingTop: "6vh",
    },
  },

  typeDiv: {
    maxWidth: 1080,
    width: "100%",
    padding: "0 5% 5% 5%",
    fontSize: "16px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "auto",
      marginLeft: "auto",
      width: "90%",
    },
  },
}))

export default function AboutMe({ data }) {
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
    <div className={classes.about}>
      <div className={classes.photo}>
        <Img
          fluid={data.about.childImageSharp.fluid}
          className={classes.image}
        />
      </div>
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
          Hello, I'm Devan Hare.
        </motion.h2>
        <div className={classes.typeDiv}>
          <motion.Typography
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 2 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            I am a Front-End Web Developer who specializes in React. I have
            experience managing multiple projects at a time, and I’m determined
            to be the best developer I can. I believe time management and
            organization are key to meeting deadlines and producing the best
            version of a project.
            <br></br>
            <br></br>
            I’m fueled by my passion for understanding the nuances of the many
            tools and frameworks that drive development. In the time I’ve been
            in this field, I’ve continually learned and tried to become better
            than I was yesterday. There’s no better feeling than facing a
            problem and figuring out a solution.
            <br></br>
            <br></br>I have several years of experience in the world outside of
            development as a trainer and manager, so I know what it takes to get
            a job done. This also helps me relate with clients. I can put myself
            in their shoes and ask the right questions to problem solve and
            figure out their priorities.
            <br></br>
            <br></br>
            As much as I enjoy development, I’m even more excited about my
            family (wife and daughter). I once heard it put this way: “In your
            pursuit to change the world, don’t forget to love your family”.
            That’s always stuck with me. It’s easy for me to get caught up in
            what I’m doing and forget the real reason behind my career. The way
            that I’ve combatted the struggle of a work/family balance is by
            removing fruitless hobbies and making the most of moments where I
            step away from the computer. This may seem out of place on a
            portfolio, but I believe it’s one of the things that makes a big
            difference in the attitude of a coworker.
            <br></br>
            <br></br>
            I’m currently working on a contract basis and freelancing. If you’d
            like to work together in any capacity, please connect and I’ll be
            happy to discuss any potential opportunities.
          </motion.Typography>
        </div>
      </div>
    </div>
  )
}
