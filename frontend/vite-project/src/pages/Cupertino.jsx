import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import CupertinoDetails from "../components/CupertinoDetails";
import CupertinoMap from "../components/CupertinoMap";
// import CupertinoCalendar from "../components/CupertinoCalendar"; 
import DateRangeCalendarValue from "../components/DatePicker";
import "../index.css"; // Import your custom styles

const Cupertino = () => {
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
          <DateRangeCalendarValue/>
          {/* <CupertinoCalendar /> */}
        </Box>
        <GuestReviews reviews={accommodation.reviews} />
        <CupertinoDetails />
      </Box>
    </Container>
  );
};

export default Cupertino;
