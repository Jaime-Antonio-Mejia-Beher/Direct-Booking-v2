import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import accommodations from "../data/accommodationsData";
import MultiRowImageCarousel from "../components/MultiRowImageCarousel";
import GuestReviews from "../components/GuestReviews";
import CupertinoDetails from "../components/CupertinoDetails";
import CupertinoMap from "../components/CupertinoMap";
import CupertinoAPI from "../api/CupertinoAPI";
import BookNowButton from "../components/BookNowButton";
import "../index.css"; // Import your custom styles

const Cupertino = ({ checkIn, checkOut }) => {
  const [dates, setDates] = useState({
    startDate: checkIn || new Date(),
    endDate: checkOut || new Date(),
  });
  const [guests, setGuests] = useState(1); // This can be adjusted as needed
  const accommodation = accommodations.find((acc) => acc.id === "cupertino");

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/checkout", { state: { accommodation, dates, guests } });
  };

  if (!accommodation) {
    return (
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Accommodation not found
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {accommodation.description}
          <BookNowButton onClick={handleBookNow} sx={{ ml: 2 }} />
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
          <CupertinoAPI setDates={setDates} />
        </Box>
        <BookNowButton
          onClick={handleBookNow}
          sx={{ mt: 3, alignSelf: "center" }}
        />
        <GuestReviews reviews={accommodation.reviews} />
        <CupertinoDetails />
        <BookNowButton onClick={handleBookNow} sx={{ mt: 3 }} />
      </Box>
    </Container>
  );
};

export default Cupertino;
