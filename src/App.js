import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer"
import "./App.css";
// import "./styles/HeroSection.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects"
import RubyTerminalApp from "./pages/RubyTerminalApp.js";
import RailsMarketplace from "./pages/RailsMarketplace.js";
import PortfolioV1 from "./pages/PortfolioV1.js";
import ExpressLibroApp from "./pages/ExpressLibroApp.js";
import JavascriptDrumkit from "./pages/JavascriptDrumkit.js";
import MERNeCommerce from "./pages/MERNeCommerce.js";
import JSHackathon from "./pages/JSHackathon.js";
import CSSArt from "./pages/CSSArt.js";
import PixelArt from "./pages/PixelArt.js";
import DingoInternship from "./pages/DingoInternship.js";

function App() {
  return (
    // todo - change links here to sections?
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />

        <Route path='/DingoInternship' element={<DingoInternship />} />
        <Route path='/MERNeCommerce' element={<MERNeCommerce />} />
        <Route path='/CSSArt' element={<CSSArt />} />
        <Route path='/pixelart' element={<PixelArt />} />
        <Route path='/javascriptdrumkit' element={<JavascriptDrumkit />} />
        <Route path='/expresslibroapp' element={<ExpressLibroApp />} />
        <Route path='/JSHackathon' element={<JSHackathon />} />
        <Route path='/railsmarketplace' element={<RailsMarketplace />} />
        <Route path='/portfolioV1' element={<PortfolioV1 />} />
        <Route path='/rubyterminalapp' element={<RubyTerminalApp />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
