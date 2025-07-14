import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    description: 'A fun project I built with React. It does amazing things!',
    link: 'https://github.com/Senpaicy/project1',
  },
  {
    name: 'Project 2',
    description: 'This is another cool project involving Python and Flask.',
    link: 'https://github.com/Senpaicy/project2',
  },
  {
    name: 'Project 3',
    description: 'A full-stack app with React, Node.js, and MongoDB.',
    link: 'https://github.com/Senpaicy/project3',
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <div className="mini-me">
              {/* You can add a mini character here */}
              <img src="/path-to-mini-me-project.png" alt="Mini me" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
