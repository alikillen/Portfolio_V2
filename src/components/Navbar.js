import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerButton from "../components/BurgerButton";
import { useMediaQuery } from "../helpers/MediaQueries";
import "../App.css";
import "../styles/Navbar.css";

function Navbar() {
  let isPageDesktop = useMediaQuery("(min-width: 880px)");
  let isPageMobile = useMediaQuery("(max-width: 880px)");

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='Navbar'>
      {isPageMobile ? (
        <button
          onClick={() => setShowLinks(!showLinks)}
          className='burger-button'
        >
          <BurgerButton />
        </button>
      ) : (
        ""
      )}

      <Link
        to='/'
        className={isPageDesktop ? "nav-title-desktop" : "nav-title-mobile"}
      >
        ALISON KILLEN
        <i className='fas fa-laptop-code' />
      </Link>

      <div className='leftSide'>
        <div
          className={isPageDesktop ? "links-desktop" : "links"}
          id={showLinks ? "buttonlinks" : ""}
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
            href='/skills'
          >
            Skills
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
  );
}

export default Navbar;
