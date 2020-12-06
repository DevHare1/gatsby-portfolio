import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: 20,
  },
}))

export default function Form() {
  const classes = useStyles()
  const [value, setValue] = React.useState("Controlled")

  const handleChange = event => {
    setValue(event.target.value)
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        label="Name"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="standard-basic"
        label="Phone"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="standard-basic"
        label="Message"
        variant="outlined"
        color="secondary"
        multiline
        rows={6}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </form>
  )
}
