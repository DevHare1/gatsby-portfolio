import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import AllCards from "./Projects/AllCards"
import HTMLCards from "./Projects/HTMLCards"
import CSSCards from "./Projects/CSSCards"
import JSCards from "./Projects/JSCards"
import Wordpress from "./Projects/WordpressCards"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1080,
    width: "90%",
  },
  ProjDiv: {
    [theme.breakpoints.up("md")]: {
      width: "82%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}))

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <div className={classes.ProjDiv}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          scrollButtons="on"
          variant="scrollable"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Clients" {...a11yProps(1)} />
          <Tab label="HTML" {...a11yProps(2)} />
          <Tab label="CSS" {...a11yProps(3)} />
          <Tab label="Javascript" {...a11yProps(4)} />
          <Tab label="React" {...a11yProps(4)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <AllCards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Wordpress />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HTMLCards />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CSSCards />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <JSCards />
      </TabPanel>
    </div>
  )
}
