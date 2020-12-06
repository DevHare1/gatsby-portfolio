import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1080,
  },
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Client Sites" {...a11yProps(1)} />
        <Tab label="HTML" {...a11yProps(2)} />
        <Tab label="CSS" {...a11yProps(3)} />
        <Tab label="Javascript" {...a11yProps(4)} />
      </Tabs>

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
