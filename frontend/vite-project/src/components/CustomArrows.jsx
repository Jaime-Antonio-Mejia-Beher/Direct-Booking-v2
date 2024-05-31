import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const arrowStyles = {
  position: "absolute",
  top: "50%", // Adjust the vertical position here
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  zIndex: 2,
  width: "50px", // Increase the size of the arrow container
  height: "60px", // Increase the size of the arrow container
  margin: '0px 7px',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "24px", // Increase the font size
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

export const NextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <Box
      sx={{ ...arrowStyles, right: "-60px" }} // Move further to the edge
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </Box>
  );
};

export const PrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <Box
      sx={{ ...arrowStyles, left: "-60px" }} // Move further to the edge
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </Box>
  );
};
