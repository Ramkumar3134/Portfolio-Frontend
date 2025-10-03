import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/About.css';

// React-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMui } from 'react-icons/si';
import { BsBootstrapFill, BsBriefcaseFill, BsFillMortarboardFill } from 'react-icons/bs';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-pro-container">
      {/* --- HERO SECTION --- */}
      <div className="about-hero">
        <h1 className="about-title">ABOUT ME</h1>
        <p className="about-subtitle">A passionate developer driven by code and creativity.</p>
      </div>

      {/* --- HOME BUTTON --- */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      <div className="about-main-content">
        {/* --- LEFT COLUMN: BIO & TIMELINE --- */}
        <div className="left-column">
          <div className="bio-pro-section">
            <h3>Who I Am</h3>
            <p>
              I'm a web developer with 6 months of internship experience, eager to build my career in a full-time role.
              My core passion is <b>backend development</b> with a strong foundation in <b>Node.js</b>, and I'm always
              excited to expand my skills in technologies like <b>Python</b>.
            </p>
            <p>
              With a solid grasp of frontend development using <b>React</b>, I thrive in collaborative environments that
              push for innovation and continuous learning.
            </p>
          </div>

          <div className="timeline-section">
            <h3>My Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon"><BsBriefcaseFill /></div>
                <div className="timeline-content">
                  <h4>Web Developer Intern</h4>
                  <p>Gained 6 months of hands-on experience in full-stack development, working on live projects.</p>
                  <span className="timeline-date">Recent</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon"><BsFillMortarboardFill /></div>
                <div className="timeline-content">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p>JP College Of Arts And Science, Tenkasi.</p>
                  <span className="timeline-date">2020 - 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SKILLS --- */}
        <div className="right-column">
          <div className="skills-section">
            <h3>My Tech Stack</h3>
            <div className="skill-category">
              <h5>Frontend</h5>
              <div className="skills-grid">
                <div className="skill-item"><FaHtml5 /> HTML</div>
                <div className="skill-item"><FaCss3Alt /> CSS</div>
                <div className="skill-item"><SiJavascript /> JavaScript</div>
                <div className="skill-item"><FaReact /> React.js</div>
                <div className="skill-item"><BsBootstrapFill /> Bootstrap</div>
                <div className="skill-item"><SiMui /> Material UI</div>
              </div>
            </div>
            <div className="skill-category">
              <h5>Backend & Database</h5>
              <div className="skills-grid">
                <div className="skill-item"><FaNodeJs /> Node.js</div>
                <div className="skill-item"><SiMongodb /> MongoDB</div>
                <div className="skill-item"><FaPython /> Python</div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/work" className="cta-button">View My Projects</Link>
            <Link to="/contact" className="cta-button secondary">Get In Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
