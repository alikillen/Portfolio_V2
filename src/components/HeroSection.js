import React from "react";
import { Button } from "./Button";
import "../App.css"
import "../styles/HeroSection.css"

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* video content here placeholder */}
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Hi there</h1>
      <p>I'm Ali.</p>
      <div classsName='hero-btns'>
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
