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
      <video src= {codevideo} autoPlay loop muted />
      <h1>Hi there</h1>
      <p>I'm Ali.</p>
      <p>I'm a junior full-stack web developer looking for my next challenge.</p>
      <p>This website is currently under construction.</p>
      <br></br>

{/* make the button functional or remove it - how to link to below cards section to scroll down to products? */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Check out my work.
        </Button>

        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Some stuff here. <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
