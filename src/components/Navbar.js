import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerButton from "../components/BurgerButton";
import { useMediaQuery } from "../helpers/MediaQueries";
import "../App.css";
import "../styles/Navbar.css";

// do hover text background fill in feature like on SBS

function Navbar() {
  let isPageDesktop = useMediaQuery("(min-width: 880px)");
  let isPageMobile = useMediaQuery("(max-width: 880px)");

  const [showLinks, setShowLinks] = useState(false);

  // todo - change about projects contact sections to single page references - use class link

  return (
    <section className='Navbar'>
      {/* <div className='leftSide'> */}
      {isPageMobile ? (
        <div className='buttonContainer'>
          <button
            onClick={() => setShowLinks(!showLinks)}
          // className='burger-button'
          >
            <BurgerButton />
          </button>
        </div>
      ) : (
        ""
      )}

      <Link
        to='/'
        className={isPageDesktop ? "navTitleDesktop" : "navTitleMobile"}
      >
        ALISON KILLEN
        <i className='fas fa-laptop-code' />
      </Link>

      <div className='leftSide'>
        <div className='buttonLinksContainer'>
          <div
            className={isPageDesktop ? "linksDesktop" : "links"}
            id={showLinks ? "buttonLinks" : ""}
          >
            <a
              className={
                isPageMobile && !showLinks ? "hide-shop-kit-link" : "links"
              }
              href='/'
            >
              Home
            </a>
            <a
              className={
                isPageMobile && !showLinks ? "hide-explore-range-link" : "links"
              }
              href='/about'
            >
              About
            </a>
            <a
              className={
                isPageMobile && !showLinks ? "hide-explore-range-link" : "links"
              }
              href='/Projects'
            >
              Projects
            </a>
            <a
              className={
                isPageMobile && !showLinks ? "hide-explore-range-link" : "links"
              }
              href='/resume'
            >
              Resume
            </a>
            <a
              className={
                isPageMobile && !showLinks ? "hide-explore-range-link" : "links"
              }
              href='/contact'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
