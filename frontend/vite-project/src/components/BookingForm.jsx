import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { createBooking, registerUser } from "../api";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const [open, setOpen] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBooking(formData);
      console.log(response.data);
      setOpen(true); // Open the signup dialog after successful booking
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignupSubmit = async () => {
    try {
      const response = await registerUser(signupData);
      console.log(response.data);
      setOpen(false); // Close the signup dialog after successful signup
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Book Your Stay
      </Typography>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Check-in Date"
        name="checkIn"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={formData.checkIn}
        onChange={handleChange}
      />
      <TextField
        label="Check-out Date"
        name="checkOut"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={formData.checkOut}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign up to manage your bookings and receive exclusive offers.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={signupData.name}
            onChange={handleSignupChange}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={signupData.email}
            onChange={handleSignupChange}
          />
          <TextField
            margin="dense"
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={signupData.password}
            onChange={handleSignupChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSignupSubmit} color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default BookingForm;
