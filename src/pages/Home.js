import "../App.css";
// import "../styles/HeroSection.css"
// import "../styles/Cards.css"

import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards"
import Footer from "../components/Footer"


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
