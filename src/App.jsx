// src/App.js
import "./App.css";
import CPACalculator from "./CPACalculator";
import styled from "styled-components";

const InfoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <InfoTitle>
        Test Task Creative Marketing Specialist | Internship
      </InfoTitle>
      <ContentWrapper>
        <CPACalculator />
      </ContentWrapper>
    </div>
  );
}

export default App;
