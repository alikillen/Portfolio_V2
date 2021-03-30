import React from "react";
import CardItem from "../components/CardItem";
import "../styles/Cards.css";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src='../Images/img-6.jpg'
              text='More placeholder text!'
              label='Placeholderlabel'
              path='/projects'
            />
            <CardItem
              src='../Images/img-7.jpg'
              text='Project 2'
              label='Project2'
              path='/projects'
            />
            <CardItem
              src='../Images/img-8.jpg'
              text='Project 3000'
              label='Project3'
              path='/projects'
            />
            <CardItem
              src='../Images/img-9.jpg'
              text='Project 4'
              label='Project4'
              path='/projects'
            />
            <CardItem
              src='../Images/img-8.jpg'
              text='Project 5'
              label='Project5'
              path='/projects'
            />
            <CardItem
              src='../Images/img-9.jpg'
              text='Project 6'
              label='Project6'
              path='/projects'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
