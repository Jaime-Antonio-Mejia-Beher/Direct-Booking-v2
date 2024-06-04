import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import DetailedInfo from "../components/DetailedInfo";
import DenverMap from "../components/DenverMap";
// import UpstairsCalendar from "../components/UpstairsCalendar";
import DateRangeCalendarValue from "../components/DatePicker";
import "../index.css"; // Import your custom styles

const Upstairs = () => {
  const accommodation = accommodations.find((acc) => acc.id === "upstairs");

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
          <DenverMap />
          <DateRangeCalendarValue />
          {/* <UpstairsCalendar /> */}
        </Box>
        <GuestReviews reviews={accommodation.reviews} />
        <DetailedInfo />
      </Box>
    </Container>
  );
};

export default Upstairs;
