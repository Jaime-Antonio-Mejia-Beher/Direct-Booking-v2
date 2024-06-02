import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import BasementDetails from "../components/BasementDetails";
import Map from "../components/Map";

const Basement = () => {
  const accommodation = accommodations.find((acc) => acc.id === "basement");

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {accommodation.description}
        </Typography>
        <MultiRowImageCarousel images={accommodation.images} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Detailed description and amenities of the 1 bedroom 1 bath listing.
        </Typography>
        <Map />
        
        <GuestReviews reviews={accommodation.reviews} />
        <BasementDetails />
      </Box>
    </Container>
  );
};

export default Basement;
