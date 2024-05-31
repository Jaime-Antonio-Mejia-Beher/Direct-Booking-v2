import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", formData);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
}

export default SignupForm;
