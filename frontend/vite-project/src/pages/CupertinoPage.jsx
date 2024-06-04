import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import CupertinoDetails from "../components/CupertinoDetails";
import CupertinoMap from "../components/CupertinoMap";
// import DateRangeCalendarValue from "../components/DatePicker";
import CupertinoAPI from "../api/CupertinoAPI";
import "../index.css"; // Import your custom styles

const Cupertino = ({ checkIn, checkOut }) => {
   console.log("CupertinoPage checkIn:", checkIn);
   console.log("CupertinoPage checkOut:", checkOut);
  const accommodation = accommodations.find((acc) => acc.id === "cupertino");

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {accommodation.description}
        </Typography>
        <MultiRowImageCarousel images={accommodation.images} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
            mt: 10,
            height: {
              xs: "850px",
              md: "400px",
            },
          }}
        >
          <CupertinoMap />
          <CupertinoAPI />
          {/* <DateRangeCalendarValue checkIn={checkIn} checkOut={checkOut} /> */}
        </Box>
        <GuestReviews reviews={accommodation.reviews} />
        <CupertinoDetails />
      </Box>
    </Container>
  );
};

export default Cupertino;
