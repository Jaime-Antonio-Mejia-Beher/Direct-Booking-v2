import { createTheme } from "@mui/material/styles";
import { green, blueGrey, deepOrange, red } from "@mui/material/colors"; // Ensure you import colors from @mui/material/colors

const theme = createTheme({
  palette: {
    primary: {
      main: red[400], // Use green color for primary
    },
    secondary: {
      main: blueGrey[500], // Use blue-grey color for secondary
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
