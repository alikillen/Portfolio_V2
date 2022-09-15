import React from "react";
import { Button } from "./Button";
import "../App.css"
import "../styles/HeroSection.css"
import codevideo from "../media/videos/code-video.mp4"


// fix navbar onclick display!
function HeroSection() {
  return (
    <div className='hero-container'>
      {/* video content here placeholder - need new video */}
      <video className="hero-video" src={codevideo} autoPlay loop muted />
      <div className='hero-text'>
        <h1>Hi there</h1>
        <p>I'm Ali.</p>
        <p>
          I'm a full-stack web developer. I like working across backend and frontend, and I have experience with React, Node, C#, MongoDB, SQL, AWS, Azure, and more.
        </p>
        <div className='hero-btns'>
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
  );
}

export default HeroSection;
