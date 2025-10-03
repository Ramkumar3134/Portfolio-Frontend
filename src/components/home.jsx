import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css';
import avatar from '../assets/ramkumar.JPG';
import profilePic from '../assets/ramkumarprofile.png';
import Work from './work';
import About from './About';
import Contact from './Contact';
import RandomTextHover from './Randomtexthover';

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState('');
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const myData = {
    name: 'Ramkumar',
    email: 'ramkumar@example.com',
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.main-nav');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <header className="page-header">
        <p>Date - {formattedDate}</p>
      </header>
      <div className="hero-title">
        <h1>PORTFOLIO</h1>
        <div className="author-info">
          <img src={avatar} alt="Ramkumar" className="author-avatar" />
          <span>Ramkumar</span>
          <span className="pro-badge">PRO</span>
        </div>
      </div>
      <main className="content-window">
        <nav className="main-nav">
          <div className="logo">Portfolio</div>
          <div className="nav-links">
            <Link to="/work">
              <RandomTextHover text="WORK" />
            </Link>
            <Link to="/about">
              <RandomTextHover text="ABOUT" />
            </Link>
            <Link to="/contact">
              <RandomTextHover text="CONTACT" />
            </Link>
          </div>
          <div className="nav-right">
            <span>{currentTime}</span>
          </div>
        </nav>

        <div className="intro-content fade-in">
          <p className="intro-greeting">Hi, I'm Ramkumar</p>

          <div className="creative-heading-wrapper">
            <h2 className="large-heading">DEVELOPER</h2>
          </div>

          <div className="intro-flex">
            <img
              src={profilePic}
              alt="Ramkumar Profile"
              className="intro-image zoom-hover"
            />

            <p className="intro-paragraph slide-up">
              I am a web developer with 6 months of internship experience,
              passionate about building efficient and scalable applications.
              My core focus is backend development with a strong foundation
              in Node.js and MongoDB, while also expanding my skills in Python.
              On the frontend, I work with React, Material UI, and Bootstrap to
              create modern, responsive user interfaces. I am motivated, a fast
              learner, and thrive in collaborative environments that encourage
              innovation and continuous growth.
            </p>
          </div>
        </div>

        {/* Rendering other components */}
        <section className="section-container">
          <Work data={myData} />
        </section>
        <section className="section-container">
          <About data={myData} />
        </section>
        <section className="section-container">
          <Contact data={myData} />
        </section>
      </main>

      <footer className="page-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Ramkumar. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:lramkumar3134@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

