import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Components/Home";


function App() {
  return (
    <main
      style={{
        display: "flex",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: "#b2cbde",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
