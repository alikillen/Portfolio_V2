import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar.js";
import "./App.css";
// import "./styles/HeroSection.css";
import Home from "./pages/Home.js"
import About from "./pages/About.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";


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
        </Switch>
      </Router>
    </>
  );
}

export default App;
