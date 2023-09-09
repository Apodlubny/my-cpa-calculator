// src/CPACalculator.js
import { useState } from "react";
import styled from "styled-components";

// Styled component for the outer container
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
`;

// Styled component for input fields
const InputField = styled.input`
  margin-top: 8px;
  padding: 8px;
  width: 90%;
  border: 1px solid #cbd5e0;
  border-radius: 0.25rem;
  text-align: center;
`;

// Styled component for the Calculate button
const CalculateButton = styled.button`
  margin-top: 16px;
  background-color: #4299e1;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #3182ce;
  }
`;

function CPACalculator() {
  const [installs, setInstalls] = useState(1232);
  const [ctr, setCTR] = useState(2.06);
  const [cpm, setCPM] = useState(1.23);
  const [clicks, setClicks] = useState(3190);
  const [conversionRate, setConversionRate] = useState(2.59);
  const [cpa, setCPA] = useState(null);

  const calculateCPA = () => {
    const impressions = (installs / (ctr / 1000)) * 1000;
    const totalCost = (impressions / 1000) * cpm;
    const cpc = totalCost / clicks;
    const calculatedCPA = cpc / (conversionRate / 100) / 1000;
    setCPA(calculatedCPA.toFixed(2));
  };

  const handleInputChange = (e, setterFunction) => {
    const inputValue = parseFloat(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
      setterFunction(inputValue);
    }
  };

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4">
        Cost Per Acquisition Calculator
      </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of App Installs
        </label>
        <InputField
          type="number"
          value={installs}
          onChange={(e) => handleInputChange(e, setInstalls)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          CTR (%) <span className="text-gray-500">(Click-Through Rate)</span>
        </label>
        <InputField
          type="number"
          value={ctr}
          onChange={(e) => handleInputChange(e, setCTR)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          CPM (€){" "}
          <span className="text-gray-500">(Cost per Thousand Impressions)</span>
        </label>
        <InputField
          type="number"
          value={cpm}
          onChange={(e) => handleInputChange(e, setCPM)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of Clicks
        </label>
        <InputField
          type="number"
          value={clicks}
          onChange={(e) => handleInputChange(e, setClicks)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          In-App Purchase Conversion Rate (%){" "}
          <span className="text-gray-500">(Percentage)</span>
        </label>
        <InputField
          type="number"
          value={conversionRate}
          onChange={(e) => handleInputChange(e, setConversionRate)}
        />
      </div>
      <CalculateButton onClick={calculateCPA}>Calculate CPA</CalculateButton>
      {cpa !== null && (
        <p className="mt-4 text-lg font-semibold">
          Cost Per Acquisition (CPA) per user: €{cpa}
        </p>
      )}
    </Container>
  );
}

export default CPACalculator;
