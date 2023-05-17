import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import VulnerabilityList from "./components/VulnerabilityList";
import VulnerabilityDetail from "./components/VulnerbilityDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<VulnerabilityList />} />
          <Route
            path="/vulnerabilities/:id"
            element={<VulnerabilityDetail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
