import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#e0ad01",
    },
  },
})

export default theme
