import React from "react";
import { Typography, Button, Box, Container, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MatrixPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Matris İşlemleri
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Determinant Hesaplama
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Matrisin determinantını hesaplayın.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/linealg/matrix/determinant")}
              >
                Determinant Hesapla
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0.7,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Matris Çarpımı
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Yakında eklenecek...
              </Typography>
              <Button variant="contained" color="primary" disabled>
                Yapım Aşamasında
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MatrixPage;
