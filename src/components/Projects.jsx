import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      
      <div className="project">
        <h3>PerspectivePlus</h3>
        <p>Chrome extension for real-time misinformation analysis in videos.</p>
        <ul>
          <li>Built with Pytorch, JavaScript, ReactJS.</li>
          <li>Integrated OpenAI and YouTube Data API for enhanced video analysis.</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
