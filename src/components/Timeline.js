import React from "react"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import TimelineMay from "./TimelineComps/May2017"
import TimelineJune from "./TimelineComps/June2019"
import TimelineMarch from "./TimelineComps/March2020"
import TimelineSeptember from "./TimelineComps/September2020"
import TimelineNovermber from "./TimelineComps/November2020"
import PresentDay from "./TimelineComps/PresentDay"

const useStyles = makeStyles(theme => ({
  lineItem: {
    color: "#e0ad01",
  },
  secondaryTail1: {
    backgroundColor: "#feb76d",
  },
  secondaryTail2: {
    backgroundColor: "#ee7364",
  },
  secondaryTail3: {
    backgroundColor: "#c06e7d",
  },
  secondaryTail4: {
    backgroundColor: "#ee7364",
  },
  secondaryTail5: {
    backgroundColor: "#feb76d",
  },
  secondaryTail6: {
    backgroundColor: "#ee7364",
  },
}))

export default function OppositeContentTimeline() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">May 2017</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail1} />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineMay />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">June 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail2} />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineJune />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">March 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail3} />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineMarch />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">September 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail4} />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineSeptember />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">November 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail5} />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineNovermber />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Present Day</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail6} />
          </TimelineSeparator>
          <TimelineContent>
            <PresentDay />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  )
}
