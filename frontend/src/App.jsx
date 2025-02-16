import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import HomePage from "./pages/HomePage";
import LinealgebraPage from "./pages/LinealgebraPage";
import MatrixPage from "./pages/MatrixPage";
import MatrixCalculator from "./MatrixCalculator";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linealg" element={<LinealgebraPage />} />
        <Route path="/linealg/matrix" element={<MatrixPage />} />
        <Route
          path="/linealg/matrix/determinant"
          element={<MatrixCalculator />}
        />
      </Routes>
    </Box>
  );
}

export default App;
