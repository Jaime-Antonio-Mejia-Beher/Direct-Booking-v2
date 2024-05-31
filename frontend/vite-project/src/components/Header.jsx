import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1 }}>
          CAASITAAS
        </Typography>
        {/* <Button color="inherit">Home</Button>
        <Button color="inherit">Book Now</Button>
        <Button color="inherit">Contact</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

