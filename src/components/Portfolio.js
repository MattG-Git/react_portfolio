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
                  <button className="m-2 btn btn-success" onClick={()=>window.open(site.link)}>View Project</button>
                  <button className="m-2 btn btn-success" onClick={()=>window.open(site.github)}>View Github</button>
              </div>
          </div>
      );
  })
  return(
      <div className="container">
          <h1 className="mb-5">My Projects</h1>
          {projectsList}
      </div>
      
  );
}