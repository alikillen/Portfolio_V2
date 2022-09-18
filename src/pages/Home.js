import "../App.css";
// import "../styles/HeroSection.css"
// import "../styles/Cards.css"

import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Skills from "../components/Skills";
import Contact from "../components/Contact"
import Projects from "../components/Projects";
import About from "../components/About"


function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <About />
      <Cards />
      <Contact />
    </>
  );
}

export default Home;
