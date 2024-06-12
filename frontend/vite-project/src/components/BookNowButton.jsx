import React from "react";
import { Button } from "@mui/material";

const BookNowButton = ({ onClick, ...props }) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary" {...props}>
      Book Now
    </Button>
  );
};

export default BookNowButton;
