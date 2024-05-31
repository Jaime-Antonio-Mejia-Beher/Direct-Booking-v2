import React from "react";
import { Container, Box, Typography } from "@mui/material";
import PhotoGallery from "../components/PhotoGallery";
import accommodations from "../data/accommodationsData";

const Upstairs = () => {
  const accommodation = accommodations.find((acc) => acc.id === "upstairs");

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          4 bedroom 3 bath - Low Cleaning Fee | DIA Airport | Patio
        </Typography>
        <PhotoGallery images={accommodation.images} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Detailed description and amenities of the 4 bedroom 3 bath listing.
        </Typography>
      </Box>
    </Container>
  );
};

export default Upstairs;
