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
      <h1>Matris Hesaplama Uygulaması</h1>
      {!showMatrixCalculator ? (
        <div>
          <p>Matris işlemlerine başlamak için aşağıdaki butona tıklayın:</p>
          <button onClick={handleStartMatrixCalculation}>
            Matris Hesaplamaya Başla
          </button>
        </div>
      ) : (
        <div>
          <MatrixCalculator setResult={setResult} />
          {result !== null && (
            <div className="result">
              <h2>Sonuç: {result}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage; 