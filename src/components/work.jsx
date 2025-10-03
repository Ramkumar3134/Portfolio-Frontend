import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Work.css';
import placeholderImage1 from '../assets/calculatorcoverpage.png';
import placeholderImage2 from '../assets/calculatorcoverpage.png';

const Work = () => {
  const navigate = useNavigate();
  const [showProjects, setShowProjects] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'PROJECT_01',
      title: 'Empowering bold thinkers at every stage',
      tags: ['PROTOTYPING WORKSHOPS', 'PHOTOGRAPHY & VR STUDIO', 'PODCAST STUDIO'],
      description:
        'These innovative spaces are equipped with machinery and tools with the highest specifications for both production. Our workshops are perfect for events, film makers, and product designers to collaborate and create freely.',
      image: placeholderImage1,
    },
    {
      id: 2,
      name: 'PROJECT_02',
      title: 'Find your perfect place',
      tags: ['TRAVEL', 'METRO', 'HOTEL'],
      description:
        'A UI/UX design project for a modern travel app that helps users find and book the perfect stay with ease. The design focuses on user-centric navigation and a seamless booking experience.',
      image: placeholderImage2,
    },
  ];

  const handleShowProjects = () => {
    setShowProjects(true);
    setShowAnimation(true);
  };

  return (
    <div className="work-page-container">
      {/* --- HEADER SECTION --- */}
      <header className="work-header">
        <div className="header-left">
          <h1 className={`animated-heading ${showAnimation ? 'animate' : ''}`}>
            <span className="line line-1">SELECTED</span>
            <span className="line line-2">CLIENT</span>
            <span className="line line-3">PROJECTS</span>
          </h1>
          {/* Home button in header */}
          <button className="home-btn" onClick={() => navigate('/')}>
            Home
          </button>
        </div>

        <div className="header-right">
          <p>
            A look at some of the projects I've collaborated on, from migrations and
            scalable websites to immersive web experiences.
          </p>
          <div className="cta-container">
            {!showProjects && (
              <button onClick={handleShowProjects} className="show-projects-button">
                Show My Work
              </button>
            )}
            <Link to="/contact" className="cta-button">
              Get in touch
            </Link>
          </div>
          <div className="partner-badge">
            <span className="badge-icon">W</span>
            <span>WEBFLOW CERTIFIED PARTNER</span>
          </div>
        </div>
      </header>

      {/* --- CONDITIONAL PROJECTS GRID --- */}
      <main className="projects-grid">
        {showProjects ? (
          projects.map((project) => (
            <div className="project-card" key={project.id}>
              <span className="project-id">{project.name}</span>
              <div className="project-content">
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <Link to="/contact" className="view-link">
                    View Project
                  </Link>
                  {/* Home button in project cards */}
                  <button className="home-btn small" onClick={() => navigate('/')}>
                    Home
                  </button>
                </div>
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-projects-message">
            Click the "Show My Work" button to view my projects.
          </p>
        )}
      </main>
    </div>
  );
};

export default Work;
