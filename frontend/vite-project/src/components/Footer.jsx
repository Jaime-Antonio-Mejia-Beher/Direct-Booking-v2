import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", p: 2, mt: "auto" }} component="footer">
      <Typography variant="body1" color="inherit">
        &copy; {new Date().getFullYear()} Caasitaas LLC
      </Typography>
    </Box>
  );
}

export default Footer;
