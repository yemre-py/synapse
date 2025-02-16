import React from "react";
import { Typography, Button, Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Linear Algebra Calculator
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            With this application, you can easily perform linear algebra
            operations.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/linealg")}
            sx={{ mt: 2 }}
          >
            Start
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
