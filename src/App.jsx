import React from "react";
import "./App.css";
import profile from "./assets/myimage.jpeg"; // Change to your photo name later

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Neel Chavan</h2>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <h1>
            Hi, I'm <br />
            <span>Neel Chavan</span>
          </h1>

          <h3>
            Frontend Developer | Programmer | AI Enthusiast
          </h3>

          <p>
            Building modern web applications and continuously learning
            technologies like React, Python, Java, C++, and Artificial
            Intelligence to create impactful digital solutions.
          </p>

          <button className="btn">
            View Projects
          </button>

        </div>

        <div className="hero-image">
          <img src={profile} alt="Neel Chavan" />
        </div>

      </section>

      {/* About */}
      <section id="about" className="section">

        <h2>About Me</h2>

        <p>
          I am Neel Chavan, a passionate student and aspiring software
          developer with knowledge of HTML, CSS, JavaScript, React,
          Python, Java, C, and C++.
          <br /><br />
          I enjoy building modern web applications, solving programming
          challenges, and exploring Artificial Intelligence technologies.
          <br /><br />
          My goal is to continuously improve my technical skills and
          create impactful real-world projects.
        </p>

      </section>

      {/* Skills */}
      <section id="skills" className="section">

        <h2>Technical Skills</h2>

        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Python</div>
          <div>Java</div>
          <div>C</div>
          <div>C++</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>AI Tools</div>
        </div>

      </section>

      {/* Education */}
      <section id="education" className="section">

        <h2>Education</h2>

        <p>
          Currently pursuing my education while focusing on Web
          Development, Programming, and Artificial Intelligence.
        </p>

      </section>

      {/* Achievements */}
      <section className="section">

        <h2>Achievements</h2>

        <div className="skills">
          <div>React Projects</div>
          <div>E-Commerce Website</div>
          <div>Portfolio Website</div>
          <div>Git & GitHub</div>
          <div>Programming Fundamentals</div>
        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="projects">

          <div className="card">
            <h3>E-Commerce Website</h3>

            <p>
              Developed using React with modern UI, responsive design,
              and interactive components.
            </p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>

            <p>
              Personal portfolio website built using React showcasing
              skills, projects, and achievements.
            </p>
          </div>

          <div className="card">
            <h3>Future AI Projects</h3>

            <p>
              Exploring Artificial Intelligence and planning innovative
              AI-based applications and solutions.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="section">

        <h2>Contact</h2>

        <p>Email: yourmail@gmail.com</p>

        <p>GitHub: github.com/yourusername</p>

        <p>Location: Maharashtra, India</p>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Neel Chavan | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;