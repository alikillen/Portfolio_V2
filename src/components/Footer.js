import React from "react";
import { Button } from "./Button";
import "../styles/Footer.css";
import { Link } from "react-router-dom";


// fix social links, responsive wrapping
function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Placeholder subscription footer heading
        </p>
        <p className='footer-subscription-text'>More placeholder text</p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='your email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Placeholder sub</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            {/* <h2>Some links here</h2> */}
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AK
              <i class='fas fa-laptop-code' />
            </Link>
          </div>
          <small class='website-rights'>© Alison Killen 2021</small>
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
      </section>
    </div>
  );
}

export default Footer;
