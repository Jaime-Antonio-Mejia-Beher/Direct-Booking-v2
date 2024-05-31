import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BookingForm from "../components/BookingForm";

function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your Property
        </Typography>
        <Typography variant="body1" paragraph>
          Experience the best stay at our property. Book directly with us for
          the best rates and exclusive offers.
        </Typography>
        <BookingForm />
      </Box>
    </Container>
  );
}

export default Home;
