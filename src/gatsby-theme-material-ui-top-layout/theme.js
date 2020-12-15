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
      main: "#ee7364",
    },
  },
})

export default theme
