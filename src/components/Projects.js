// new project card (will need styling also)
// in desktop, should have a picture and text next to each other - with text hover feature about languages used
// 4 feature projects on homepage single scroll
// 'see more projects' link at bottom - links to overall project page

// all single scroll - make this first then add extra pages
// projects/about have a seperate extra page also

 // todo - change about projects contact sections to single page references - use class link
//  todo - projects has a seperate page and so does resume and about

import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  return (
      <div className='projectsContainer'>
      <h1>My Projects</h1>
      <div className='projectsText'>
        <p>--iterate thru project cards here with hover text etc--</p>
      </div>
    </div>
  );
}

export default ProjectCard;
