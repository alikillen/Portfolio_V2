// new project card (will need styling also)
// in desktop, should have a picture and text next to each other - with text hover feature about languages used
// 4 feature projects on homepage single scroll
// 'see more projects' link at bottom - links to overall project page

// all single scroll - make this first then add extra pages
// projects/about have a seperate extra page also

// todo - change about projects contact sections to single page references - use class link
//  todo - projects has a seperate page and so does resume and about
// todo - each project box links to the section on all projects page? 

import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"
import codeImage from "../media/Images/code-image.jpg"


function ProjectsSection(props) {
  return (
    <section className='projectsContainer'>
      <ProjectCard
        title="Test Title"
        src={codeImage}
        text='Lorem Ipsum is simply dummy text of the printing and typesetting aset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        label='TestProject'
        path='/Projects'
      />
    </section>
  );
}

export default ProjectsSection;
