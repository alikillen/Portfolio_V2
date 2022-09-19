import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

function ProjectCard (props) {
  return (
    <div className="projectCardContainer">
      <div className="projectCardImageContainer">
        <img
          src={props.src}
          alt='imagedescription'
          className='projectCardImage'
        />
      </div>
      <div className="projectCardTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="projectCardText">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
