import "../App.css";
// import "../styles/HeroSection.css"
// import "../styles/Cards.css"

import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import TypedText from "../components/TypedText"


function Home() {
  return (
    <>
      <HeroSection />
      <TypedText/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
