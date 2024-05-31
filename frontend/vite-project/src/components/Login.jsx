import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Log In
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
}

export default Login;
