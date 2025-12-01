import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import GenerateKeys from "./pages/GenerateKeys";
import EncryptSign from "./pages/EncryptSign";
import DecryptVerify from "./pages/DecryptVerify";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<GenerateKeys />} />
        <Route path="/generate" element={<GenerateKeys />} />
        <Route path="/encrypt" element={<EncryptSign />} />
        <Route path="/decrypt" element={<DecryptVerify />} />
      </Routes>
    </BrowserRouter>
  );
}