import React, { useState } from "react";
import MatrixCalculator from "./MatrixCalculator";

const HomePage = () => {
  const [showMatrixCalculator, setShowMatrixCalculator] = useState(false);
  const [result, setResult] = useState(null);

  const handleStartMatrixCalculation = () => {
    setShowMatrixCalculator(true);
  };

  return (
    <div className="home-page">
      <h1>Matris Hesaplama Uygulamas�</h1>
      {!showMatrixCalculator ? (
        <div>
          <p>Matris i�lemlerine ba�lamak i�in a�a��daki butona t�klay�n:</p>
          <button onClick={handleStartMatrixCalculation}>
            Matris Hesaplamaya Ba�la
          </button>
        </div>
      ) : (
        <div>
          <MatrixCalculator setResult={setResult} />
          {result !== null && (
            <div className="result">
              <h2>Sonu�: {result}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage; 