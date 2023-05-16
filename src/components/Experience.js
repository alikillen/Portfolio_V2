
import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"
import codeImage from "../media/Images/code-image.jpg"

//todo - correct the classnames here
//todo - add experience to navbar and footer

function Experience(props) {
  return (
    <section className='projectsContainer' id="experience">
      <ProjectCard
        title="Experience"
        src={codeImage}
        text='Ideally a scrolling section here.'
        label='TestProject'
        path='/Projects'
      />
    </section>
  );
}

export default Experience;
