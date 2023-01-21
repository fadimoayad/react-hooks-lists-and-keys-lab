import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const list = projects.map(project =>(
  <ProjectItem key={project.id} {...project}/>
  ))
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{list}</div>
    </div>
  );
}

export default ProjectList;
