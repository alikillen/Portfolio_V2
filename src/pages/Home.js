import "../App.css";
// import "../styles/HeroSection.css"
// import "../styles/Cards.css"

import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Skills from "../components/Skills";


function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
