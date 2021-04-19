import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import "./App.css";
// import "./styles/HeroSection.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";
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
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/contact' exact component={Contact} />

          <Route path='/DingoInternship' exact component={DingoInternship} />
          <Route path='/MERNeCommerce' exact component={MERNeCommerce} />
          <Route path='/CSSArt' exact component={CSSArt} />
          <Route path='/pixelart' exact component={PixelArt} />
          <Route path='/javascriptdrumkit' exact component={JavascriptDrumkit} />
          <Route path='/expresslibroapp' exact component={ExpressLibroApp} />
          <Route path='/JSHackathon' exact component={JSHackathon} />
          <Route path='/railsmarketplace' exact component={RailsMarketplace} />
          <Route path='/portfolioV1' exact component={PortfolioV1} />
          <Route path='/rubyterminalapp' exact component={RubyTerminalApp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
