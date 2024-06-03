import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import BasementDetails from "../components/BasementDetails";
import DenverMap from "../components/DenverMap";
import DateRangeCalendarValue from "../components/DatePicker";
import "../index.css"; // Import your custom styles

const Basement = () => {
  const accommodation = accommodations.find((acc) => acc.id === "basement");

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
            // justifyContent: "center",
            // alignItems: "center",
            gap: 8,
            mt: 10,
            height: {
              xs: '850px',
              md: '400px'
            }
          }}
        >
          <DenverMap />
          <DateRangeCalendarValue />
        </Box>
        <GuestReviews reviews={accommodation.reviews} />
        <BasementDetails />
      </Box>
    </Container>
  );
};

export default Basement;
