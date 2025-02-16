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
      <h1>Matris Hesaplama Uygulamasý</h1>
      {!showMatrixCalculator ? (
        <div>
          <p>Matris iþlemlerine baþlamak için aþaðýdaki butona týklayýn:</p>
          <button onClick={handleStartMatrixCalculation}>
            Matris Hesaplamaya Baþla
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