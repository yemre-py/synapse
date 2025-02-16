import React from "react";
import { Typography, Button, Box, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Lineer Cebir Hesaplayıcısı
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Hoş Geldiniz!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Bu uygulama ile lineer cebir işlemlerini kolayca yapabilirsiniz.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/linealg")}
            sx={{ mt: 2 }}
          >
            Başla
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
