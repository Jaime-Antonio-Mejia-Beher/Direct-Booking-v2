import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ accommodation, dates, guests }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: guests,
    checkIn: dates.startDate,
    checkOut: dates.endDate,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save reservation details
    await axios.post("/api/reservations", {
      ...formData,
      accommodationId: accommodation.id,
    });

    navigate("/confirmation"); // Redirect to a confirmation page or show a success message
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Book Your Stay at {accommodation.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Check-in: {new Date(formData.checkIn).toLocaleDateString()}
          <br />
          Check-out: {new Date(formData.checkOut).toLocaleDateString()}
          <br />
          Number of Guests: {formData.guests}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Full Name"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Complete Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CheckoutForm;
