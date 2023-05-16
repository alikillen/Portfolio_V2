import React from "react";
import "../styles/Cards.css";
import CardItem from "./CardItem";

import codeimage from "../media/Images/code-image.jpg"
import codeimage2 from "../media/Images/code-image2.jpg"
import codeimage3 from "../media/Images/code-image3.jpg";

import codeimage4 from "../media/Images/code-image4.jpg";
import codeimage5 from "../media/Images/code-image5.jpg";
import codeimage6 from "../media/Images/code-image6.jpg";



function Cards() {
  return (
    <section className='project-cards' id="projects">
      <h1>Stuff I've made</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src={codeimage}
              text='Dingo Software Internship'
              label='DingoInternship'
              path='/DingoInternship'
            />
            <CardItem
              src={codeimage2}
              text='She Rydes eCommerce Website'
              label='SheRydes'
              path='/MERNeCommerce'
            />
            <CardItem
              src={codeimage3}
              text='CSS Art'
              label='CSSArt'
              path='/CSSArt'
            />
            <CardItem
              src={codeimage4}
              text='Pixel Art'
              label='PixelArt'
              path='/pixelart'
            />
            <CardItem
              src={codeimage5}
              text='Javascript Drumkit'
              label='JS Drumkit'
              path='/javascriptdrumkit'
            />
            {/* <CardItem
              src={codeimage6}
              text='Express Hackathon - Libro App'
              label='LibroApp'
              path='/expresslibroapp'
            />
            <CardItem
              src={codeimage2}
              text='Javascript Hackathon - WelcomeBoard App'
              label='WelcomeBoard'
              path='/JSHackathon'
            /> */}

            <CardItem
              src={codeimage3}
              text='Ruby on Rails Marketplace App'
              label='RailsMarketplace'
              path='/railsmarketplace'
            />

            <CardItem
              src={codeimage4}
              text='Portfolio V1'
              label='PortfolioV1'
              path='/portfolioV1'
            />

            <CardItem
              src={codeimage5}
              text='Ruby Terminal App'
              label='rubyterminalapp'
              path='/rubyterminalapp'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
