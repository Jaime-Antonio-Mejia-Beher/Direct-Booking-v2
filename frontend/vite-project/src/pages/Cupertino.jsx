import React from "react";
import { Container, Box, Typography } from "@mui/material";
import PhotoGallery from "../components/PhotoGallery";
import accommodations from "../data/accommodationsData";

const Cupertino = () => {
  const accommodation = accommodations.find((acc) => acc.id === "cupertino");

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          1 bedroom 1 bath - Private Unit | Full Kitchen | King Bed
        </Typography>
        <PhotoGallery images={accommodation.images} />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Detailed description and amenities of the 1 bedroom 1 bath listing.
        </Typography>
      </Box>
    </Container>
  );
};

export default Cupertino;
