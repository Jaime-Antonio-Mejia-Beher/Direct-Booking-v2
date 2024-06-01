import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import DetailedInfo from "../components/DetailedInfo";

const Cupertino = () => {
  const accommodation = accommodations.find((acc) => acc.id === "cupertino");

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {accommodation.description}
        </Typography>
        <MultiRowImageCarousel images={accommodation.images} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Detailed description and amenities of the Cupertino private unit.
        </Typography>
        <GuestReviews reviews={accommodation.reviews} />
        <DetailedInfo />
      </Box>
    </Container>
  );
};

export default Cupertino;
