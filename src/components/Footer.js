import React from "react";
import { Button } from "./Button";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../helpers/MediaQueries";

// fix social links, responsive wrapping
function Footer() {
  // todo - add more breakpoints
  let isPageDesktop = useMediaQuery("(min-width: 880px)");
  let isPageMobile = useMediaQuery("(max-width: 880px)");

  return (
    <section className='footer-container'>

      <div
        class={isPageDesktop ? "footer-linksDesktop" : "footer-linksMobile"}
      >
        {/* <h2>Some links here</h2> */}
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='#'>Resume</Link>
        <Link to='#'>Contact</Link>
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
            <Link
              class='social-icon-link twitter'
              to='/https://twitter.com/alikillenit'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter'></i>
            </Link>
            <Link
              class='social-icon-link Linkedin'
              to='/https://www.linkedin.com/in/alison-killen-she-her-2327a059/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin'></i>
            </Link>
            <Link
              class='social-icon-link medium'
              to='/https://medium.com/@alisoneme1994'
              target='_blank'
              aria-label='Medium'
            >
              <i class='fab fa-medium'></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
