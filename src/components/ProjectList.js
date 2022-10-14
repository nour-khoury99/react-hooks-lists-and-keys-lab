import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem name ="Reciplease" about="A receipe Tracking App" />
        <ProjectItem name =" Kibbles N Bitz" about = "Tinder for Dogs"/>
        <ProjectItem name = "Alliens Wars" about ="Etsy for Alliens"/>
        
      </div>
    </div>
  );
}

export default ProjectList;
