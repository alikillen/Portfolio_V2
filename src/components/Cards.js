import React from "react";
import "../styles/Cards.css";
import CardItem from "./CardItem";


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src='../media/Images/img-1.jpg'
              text='More placeholder text!'
              label='Placeholderlabel'
              path='/about'
            />
            <CardItem
              src='../media/Images/img-2.jpg'
              text='Project 2'
              label='Project2'
              path='/about'
            />
            <CardItem
              src='../media/Images/img-3.jpg'
              text='Project 3000'
              label='Project3'
              path='/about'
            />
            <CardItem
              src='../media/Images/img-4.jpg'
              text='Project 4'
              label='Project4'
              path='/about'
            />
            <CardItem
              src='../media/Images/img-8.jpg'
              text='Project 5'
              label='Project5'
              path='/about'
            />
            <CardItem
              src='../media/Images/img-9.jpg'
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
