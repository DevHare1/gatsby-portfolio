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

const useStyles = makeStyles(theme => ({
  timelineText: {
    marginBottom: 200,
  },
  lineItem: {
    color: "#e0ad01",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
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
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timelineText}>
              Began learning about web development, marketing, and SEO,
              primarily out of a need to market a book that I wrote and
              self-published.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">June 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timelineText}>
              Decided to move forward with development as a career path and
              started the Frontend Web Development Tech Degree.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">March 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timelineText}>
              Founded Hare Development and started Freelancing. I mostly used
              Wordpress or an HTML stack to build websites.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">September 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Began working for Square Six in downtown Siloam Springs, AR.
              Blake, the owner of the company contacted me to help with a
              project and hired me on a contract basis to tackle their web
              development projects.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  )
}
