// src/components/Projects.jsx

import React from 'react';
import '../Projects.css';
import kiva from '../images/kiva.png'
import perspectiveplus from '../images/perspectiveplus.png'
import imposter from '../images/imposter.png'
const projects = [
  {
    title: 'PerspectivePlus',
    description: 'Developed a Chrome Extension for real-time misinformation analysis in videos',
    githubLink: 'https://github.com/yourusername/project1',
    websiteLink: 'https://project1.com',
    image: perspectiveplus,
  },
  {
    title: 'Kiva Loan Prediction',
    description: 'Developed a loan prediction algorithm that predicts vendor rate of default',
    githubLink: 'https://github.com/yourusername/project2',
    websiteLink: 'https://project2.com',
    image: kiva,
  },
  {
    title: '--',
    description: '.',
    githubLink: 'https://github.com/yourusername/project3',
    websiteLink: 'https://project3.com',
    image: imposter,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
