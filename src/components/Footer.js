import React from "react";
import { Button } from "./Button";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../helpers/MediaQueries";

// todo - responsive wrapping
function Footer() {
  // todo - add more breakpoints, do breakpoints better with a framework etc
  let isPageDesktop = useMediaQuery("(min-width: 880px)");
  let isPageMobile = useMediaQuery("(max-width: 880px)");

  return (
    <section className='footer-container' id="footer">

      <div
        class={isPageDesktop ? "footer-linksDesktop" : "footer-linksMobile"}
      >
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#resume'>Resume</a>
        <a href='#contact'>Contact</a>
      </div>
      <div class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AK
              <i class='fas fa-laptop-code' />
            </Link>
          </div>
          <small class='website-rights'>© Alison Killen 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/alikillenit'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter'></i>
            </a>
            <a
              class='social-icon-link Linkedin'
              href='https://www.linkedin.com/in/alison-killen-2327a059/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin'></i>
            </a>
            <a
              class='social-icon-link medium'
              href='https://medium.com/@alisoneme1994'
              target='_blank'
              aria-label='Medium'
            >
              <i class='fab fa-medium'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
