import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import LeahSite from "../../images/LeahCarvajal.png"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"

//for modal
function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const modal = {
  modalImage: LeahSite,
  modalAlt: "Leah Carvajal Counseling Project",
  modalTitle: "Leah Carvajal Counseling",
  modalDescription:
    "For this project I built a website, optimized for SEO, and I’m currently hosting/managing the website. This was a site for a client in Conway, AR that wanted to consolidate some of her various services and projects in one place. It was built with Wordpress using the Divi Theme.",
  modalurl: "https://leahcarvajalcounseling.com/",
}

//for card
const images = [
  {
    url: LeahSite,
    title: "Leah Carvajal Counseling",
    width: "100%",
  },
]

const useStyles = makeStyles(theme => ({
  //for card
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 300,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 300,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  //for modal
  paper: {
    position: "absolute",
    width: "80%",
    maxWidth: 1080,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalImage: {
    width: "100%",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "auto",
    },
  },
}))

export default function ButtonBases() {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  //Modal Content
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img
        src={modal.modalImage}
        alt={modal.modalAlt}
        className={classes.modalImage}
      />
      <h2 id="simple-modal-title">{modal.modalTitle}</h2>
      <p id="simple-modal-description">{modal.modalDescription}</p>
      <div className={classes.button}>
        <Button
          href={modal.modalurl}
          variant="contained"
          color="#000"
          target="_blank"
        >
          View Live Website
        </Button>
      </div>
    </div>
  )

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          onClick={handleOpen}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
