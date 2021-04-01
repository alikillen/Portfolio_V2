import React from "react";
import { Button } from "./Button";
import "../App.css"
import "../styles/HeroSection.css"


// fix navbar onclick display!
function HeroSection() {
  return (
    <div className='hero-container'>
      {/* video content here placeholder - need new video */}
      <video src="../media/videos/video-2.mp4" autoPlay loop muted />
      <h1>Hi there</h1>
      <p>I'm Ali.</p>
      <br></br>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Let's Go.
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Some stuff here. <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
