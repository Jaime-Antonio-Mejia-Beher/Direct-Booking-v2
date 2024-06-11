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
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Stripe public key
const stripePromise = loadStripe("your-stripe-public-key");

const CheckoutForm = ({ accommodation, checkIn, checkOut }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    // Create payment intent on the server
    const { data: clientSecret } = await axios.post(
      "/api/create-payment-intent",
      {
        amount: accommodation.price, // Assuming price is in smallest currency unit (e.g., cents)
      }
    );

    // Confirm the card payment
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
        },
      }
    );

    if (error) {
      console.error(error);
    } else {
      console.log("Payment successful:", paymentIntent);
      // Redirect or show success message
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Book Your Stay at {accommodation.name}
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
              <TextField
                name="guests"
                label="Number of Guests"
                type="number"
                fullWidth
                value={formData.guests}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Payment Information
              </Typography>
              <CardElement />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!stripe}
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

const CheckoutPage = ({ accommodation, checkIn, checkOut }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm
      accommodation={accommodation}
      checkIn={checkIn}
      checkOut={checkOut}
    />
  </Elements>
);

export default CheckoutPage;
