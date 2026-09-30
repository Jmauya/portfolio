import React, { useState } from 'react';
import './style.css';
import './mediaqueries.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* DESKTOP NAVIGATION */}
      <nav id="desktop-nav">
        <div className="logo">Jannatul Mauya Nabila</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HAMBURGER / MOBILE NAVIGATION */}
      <nav id="hamburger-nav">
        <div className="logo">Jannatul Mauya Nabila</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

      {/* PROFILE SECTION */}
      <section id="profile">
        <div className="section__pic-container">
          <img
            src="./assets/profile-pic.png"
            alt="Jannatul Mauya Nabila profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Jannatul Mauya Nabila</h1>
          <p className="section__text__p2">AI/ML Enthusiast</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => handleScrollTo('contact')}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => (window.location.href = 'https://linkedin.com/')}
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() => (window.location.href = 'https://github.com/')}
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
              </div>
              <div className="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree<br /></p>
              </div>
            </div>
            <div className="text-container">
              <p></p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => handleScrollTo('experience')}
        />
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {/* FRONTEND SKILLS */}
            <div className="details-container">
              <h2 className="experience-sub-title">AI/ML enthusiast</h2>
              <div className="article-container">
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>

            {/* BACKEND & OTHER SKILLS */}
            <div className="details-container">
              <h2 className="experience-sub-title">AI/ML enthusiast</h2>
              <div className="article-container">
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => handleScrollTo('projects')}
        />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {/* PROJECT 1 */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-1.png" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Live Demo
                </button>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-2.png" alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Two</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Live Demo
                </button>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-3.png" alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project Three</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => handleScrollTo('contact')}
        />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
}
