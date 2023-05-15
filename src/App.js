import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer"
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects"


function App() {
  return (
    // todo - change links here to sections? which ones should have seperate pages? remove pages links in navbar?
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
