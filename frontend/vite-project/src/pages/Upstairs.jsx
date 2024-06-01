import React from "react";
import { Container, Box, Typography } from "@mui/material";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";

const Upstairs = () => {
  const accommodation = accommodations.find((acc) => acc.id === "upstairs");

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {accommodation.description}
        </Typography>
        <MultiRowImageCarousel images={accommodation.images} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Detailed description and amenities of the 4 bedroom 3 bath listing.
        </Typography>
        <GuestReviews reviews={accommodation.reviews} />
      </Box>
    </Container>
  );
};

export default Upstairs;
