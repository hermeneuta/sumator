// import logo from "./dcopih_new_.png";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
