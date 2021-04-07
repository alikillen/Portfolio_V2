import React from "react";
import "../App.css";
import { Link } from "react-router-dom"

function Contact() {
  return (
    <div>
      <h1 className='contact'>Contact</h1>
      <p>Have your people call my people.</p>

      <p>there should probably be a form here...</p>

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
              // target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter'></i>
            </Link>
            <Link
              class='social-icon-link Linkedin'
              to='/https://www.linkedin.com/in/alison-killen-she-her-2327a059/'
              // target='_blank'
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin'></i>
            </Link>
            <Link
              class='social-icon-link medium'
              to='/https://medium.com/@alisoneme1994'
              // target='_blank'
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

export default Contact;
