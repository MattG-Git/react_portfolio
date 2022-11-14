import React from 'react';
import { PROJECTS } from "../seeds/projects";

export default function Portfolio() {
  const projects = PROJECTS;
  const projectsList = projects.map(site => {
      return (
          <div className="row align-items-center" id="projects">
              <div className="col-md-5 mb-5">
                  <img className="projectimg img-thumbnail" src={site.image} alt="project" onClick={()=>window.open(site.link)}/>
              </div>
              <div className="col-md-7">
                  <p className="mb-0" style={{fontSize:"2.2rem", fontWeight:"100"}}>{site.name}</p>
                  <p style={{fontWeight:"700", color:"gray", fontStyle:"italic"}}>{site.subtitle}</p>
                  <p>{site.description}</p>
                  <button className="mb-5" color="warning" size="lg" onClick={()=>window.open(site.link)}>View Project</button>
              </div>
          </div>
      );
  })
  return(
      <div className="container">
          <h2 className="mb-5">My Projects</h2>
          {projectsList}
      </div>
      
  );
}