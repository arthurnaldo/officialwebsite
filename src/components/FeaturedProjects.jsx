import React from 'react';
import '../FeaturedProjects.css';
import MoodMap from '../images/MoodMap.png'; // Correct image import
import { FaGlobe, FaGithub } from 'react-icons/fa';

function FeaturedProjects() {
  const projects = [
    {
      title: 'MoodMap',
      description: 'A tool that analyzes the sentiment trends of a Reddit user\'s posts over time, providing insights into their emotional tone and shifts in perspective.',
      technologies: ['React', 'Flask', 'RedditAPI', 'TypeScript'],
      githubLink: 'https://github.com/atharvnaidu/moodmap', // Corrected GitHub link
      websiteLink: 'https://atharvnaidu.github.io/MoodMap/', // Add the actual website link here
      imageUrl: MoodMap, // Use imported image here
      logoUrl: <FaGlobe size={50} /> // FaGlobe icon as logo
    }
  ];

  return (
    <div className="featured-projects">
      <h1>Featured Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, idx) => (
                  <span className="tech" key={idx}>{tech}</span>
                ))}
              </div>
              <div className="links">
                <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={40} /> {/* GitHub icon */}
                </a>
                {project.websiteLink && (
                  <a href={project.websiteLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    {project.logoUrl} {/* Logo icon */}
                  </a>
                )}
              </div>
            </div>
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
