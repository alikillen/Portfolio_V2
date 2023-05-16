import "../App.css";

import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards"
// import Photo from "../components/Photo"
import Skills from "../components/Skills";
import Contact from "../components/Contact"
import Projects from "../components/Projects";
import About from "../components/About"
import Resume from "../components/Resume"
import Experience from "../components/Experience";


function Home() {
  return (
    <>
      <HeroSection />
      {/* <Photo /> */}
      <Skills />
      <Experience />
      <Projects />
      <About />
      <Cards />
      <Contact />
      <Resume />
    </>
  );
}

export default Home;
