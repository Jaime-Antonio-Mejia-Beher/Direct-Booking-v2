import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

export default theme;
