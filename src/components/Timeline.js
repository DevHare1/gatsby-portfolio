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
              self-published. I built my first few websites with SquareSpace.
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
              started the Frontend Web Development Tech Degree at Team
              Treehouse.
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
              After completing my Tech Degree I founded Hare Development and
              started Freelancing. I mostly used Wordpress or an HTML stack to
              build websites.
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
            <Typography className={classes.timelineText}>
              Began working for Square Six in downtown Siloam Springs, AR.
              Blake, the owner of the company contacted me to help with a
              project and hired me on a contract basis to tackle their web
              development projects.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">November 2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={classes.timelineText}>
              Shortly after working with Square Six I realized that I needed to
              expand my development knowledge and started adding libraries like
              React and Angular to my toolbelt. This site is actually built with
              Gatsby and deployed with Vercel.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Present Day</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              I'm constantly learning and growing full time as a developer. If
              I'm not working on a project, I'm brushing up or learning
              something new. My goal is to eventually begin a career working
              full time with a solid company.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  )
}
