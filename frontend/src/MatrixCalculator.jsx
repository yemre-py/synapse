import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Grid,
  Paper,
  Container,
  Typography,
} from "@mui/material";

const MatrixCalculator = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState(2);
  const [result, setResult] = useState(null);
  const [matrix, setMatrix] = useState(
    Array(size)
      .fill()
      .map(() => Array(size).fill(""))
  );

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setMatrix(
      Array(newSize)
        .fill()
        .map(() => Array(newSize).fill(""))
    );
  };

  const handleMatrixChange = (row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
  };

  const calculateDeterminant = async (e) => {
    e.preventDefault();
    try {
      const numericMatrix = matrix.map((row) =>
        row.map((cell) => parseFloat(cell))
      );

      const response = await fetch("http://localhost:8080/matrix/determinant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: numericMatrix }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error: ${response.status} - ${errorText}`);
      }

      const text = await response.text();
      const data = JSON.parse(text);
      setResult(data.determinant);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Determinant Calculator
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate("/linealg/matrix")}
          sx={{ mb: 3 }}
        >
          Go Back
        </Button>
        <Box component="form" onSubmit={calculateDeterminant} sx={{ mt: 3 }}>
          <FormControl sx={{ minWidth: 120, mb: 3 }}>
            <InputLabel>Matrix Size</InputLabel>
            <Select
              value={size}
              onChange={handleSizeChange}
              label="Matrix Size"
            >
              {[2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}x{num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Paper elevation={3} sx={{ p: 3, mb: 3, maxWidth: 500, mx: "auto" }}>
            <Grid container spacing={1} justifyContent="center">
              {matrix.map((row, i) => (
                <Grid item xs={12} key={i}>
                  <Box display="flex" justifyContent="center" gap={1}>
                    {row.map((cell, j) => (
                      <TextField
                        key={`${i}-${j}`}
                        type="number"
                        value={cell}
                        onChange={(e) =>
                          handleMatrixChange(i, j, e.target.value)
                        }
                        required
                        size="small"
                        sx={{ width: 80 }}
                      />
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Button type="submit" variant="contained" color="primary">
            Calculate Determinant
          </Button>

          {result !== null && (
            <Box sx={{ mt: 2 }}>
              <Paper elevation={3} sx={{ p: 2, display: "inline-block" }}>
                Determinant: {result}
              </Paper>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MatrixCalculator;
