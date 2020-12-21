import React from "react"
import "../styles.css"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

import Contact from "../components/Contact"

import Navbar from "../components/Navbar"

const useStyles = makeStyles({
  cover: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    //minHeight: "100vh",
    [theme.breakpoints.down("lg")]: {
      minHeight: "40vh",
    },
  },
  fourDiv: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    paddingTop: "14%",
    paddingBottom: "13%",
    width: "90%",
    color: "#303030",
    maxWidth: 1248,
    [theme.breakpoints.down("md")]: {
      paddingTop: "35%",
      paddingBottom: "30%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "70%",
      paddingBottom: "85%",
    },
  },
})

export default function Home({ data }) {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.site}>
        <div className={classes.cover}>
          <Navbar />
          <div className={classes.fourDiv}>
            <h1 className={classes.fourOhfour}>Page not found</h1>
            <p>
              Oops! The page you are looking for has been removed or relocated
            </p>
            <a href="https://devanhare.com/">Return Home</a>
          </div>
        </div>
        <Contact />
      </div>
    </ThemeProvider>
  )
}
