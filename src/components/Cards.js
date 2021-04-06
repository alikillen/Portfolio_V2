import React from "react";
import "../styles/Cards.css";
import CardItem from "./CardItem";

import projectimage1 from "../media/Images/img-1.jpg"
import projectimage2 from "../media/Images/img-2.jpg";
import projectimage3 from "../media/Images/img-3.jpg";
import projectimage4 from "../media/Images/img-4.jpg";
import projectimage5 from "../media/Images/img-5.jpg";
import projectimage6 from "../media/Images/img-6.jpg";



function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src={projectimage1}
              text='Project 1'
              label='Project1'
              path='/about'
            />
            <CardItem
              src={projectimage2}
              text='Project 2'
              label='Project2'
              path='/about'
            />
            <CardItem
              src={projectimage3}
              text='Project 3000'
              label='Project3'
              path='/about'
            />
            <CardItem
              src={projectimage4}
              text='Project 4'
              label='Project4'
              path='/about'
            />
            <CardItem
              src={projectimage5}
              text='Project 5'
              label='Project5'
              path='/about'
            />
            <CardItem
              src={projectimage6}
              text='Project 6'
              label='Project6'
              path='/about'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
