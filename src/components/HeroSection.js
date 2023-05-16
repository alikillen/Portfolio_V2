import React from "react";
import { Button } from "./Button";

import TypedText from "../components/TypedText"
import "../App.css"
import "../styles/HeroSection.css"
import codeVideo from "../media/videos/code-video.mp4"

function HeroSection() {
  return (
    <section className='heroContainer'>
      <div className='heroVideoOverlay'>
        <video className="heroVideo" src={codeVideo} autoPlay loop muted />

        <div className='heroText'>
          <h1><TypedText textToAnimate={"Hi there! I'm Ali."} /></h1>
          <br></br>
          <p>
            I'm a full-stack software developer.
          </p>
          <br></br>
          <p>I like working across both the backend and frontend, and I have experience with React, Node, C#, MongoDB, SQL, AWS, Azure, and more.</p>
          <div className='heroBtns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Check out my work.
            </Button>
          </div>
        </div>
        <br></br>

        {/* make the button functional or remove it - how to link to below cards section to scroll down to products? */}


        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Some stuff here. <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </section>
  );
}

export default HeroSection;
