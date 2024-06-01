import React from "react";
import { Routes, Route } from "react-router-dom";
import MainBody from "./components/MainBody";
import Schedule from "./components/Schedule";

function App() {
  return (   
    <Routes>
      <Route path="/" element={<MainBody />} />
      <Route path="/Schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
