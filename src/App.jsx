import React from "react";
import "./App.css";
import profile from "./assets/myimage.jpeg"; // Change to your photo name later

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "C",
  "C++",
  "Git",
  "GitHub",
  "AI Tools",
];

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Built a responsive React storefront with product cards, cart interactions, and polished animations.",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed a modern portfolio experience to showcase skills, projects, and contact information.",
  },
  {
    title: "Startup Project",
    description:
      "Led a startup-focused project that combined product design, MVP development, and iterative user feedback.",
  },
  {
    title: "Problem-Solving Websites",
    description:
      "Multiple small projects and coding challenge sites focused on algorithms, data structures, and user-facing tools.",
  },
  {
    title: "AI Prototype",
    description:
      "Experimented with AI-driven ideas and data-driven UI components for smarter interfaces.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Built first React apps",
    details: "Focused on responsive UI, reusable components, and clean front-end architecture.",
  },
  {
    year: "2025",
    title: "Expanded AI learning",
    details: "Studied machine learning concepts and applied them to interactive web experiences.",
  },
  {
    year: "2026",
    title: "Launched portfolio",
    details: "Created an attractive portfolio to present skills, work, and future goals.",
  },
];

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">NC</span>
          <h2>Neel Chavan</h2>
        </div>

        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Journey</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">Frontend Developer • AI Enthusiast</span>
          <h1>
            Hi, I&apos;m <span>Neel Chavan</span>
          </h1>
          <p>
            I design modern web apps with smooth interactions, responsive
            layouts, and a strong focus on visual polish.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#projects">
              Explore Work
            </a>
            <a className="btn btn-secondary" href="#contact">
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-tags">
            <span>React</span>
            <span>UI Design</span>
            <span>Responsive</span>
            <span>AI</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-frame" />
          <img src={profile} alt="Neel Chavan" />
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-header">
          <h2>About Me</h2>
          <p>
            I&apos;m a developer focused on frontend experiences that combine
            clean visuals, strong interactions, and thoughtful performance.
          </p>
        </div>

        <div className="section-grid">
          <article className="glass-card about-card">
            <h3>Who I am</h3>
            <p>
              I&apos;m a student and developer who loves building web projects
              in React, exploring AI, and improving my skills every day. I have
              built e-commerce websites, worked on a startup project, and
              created many problem-solving websites and coding tools.
            </p>
            <div className="info-list">
              <div>
                <span>Experience</span>
                <strong>1+ year</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Frontend & UI</strong>
              </div>
              <div>
                <span>Tools</span>
                <strong>React, Vite, Git</strong>
              </div>
            </div>
          </article>

          <article className="glass-card skill-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section stats-wrap">
        <div className="stats">
          <div>
            <strong>10+</strong>
            <p>Projects completed</p>
          </div>
          <div>
            <strong>5</strong>
            <p>Web interfaces</p>
          </div>
          <div>
            <strong>3</strong>
            <p>React apps</p>
          </div>
          <div>
            <strong>1</strong>
            <p>AI prototype</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>
            A few highlights of work that showcases responsive design and
            attention to detail.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-header">
          <h2>Journey</h2>
          <p>
            From early web projects to stronger UI work and a growing focus on
            AI-inspired features.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((event) => (
            <div key={event.year} className="timeline-item">
              <span>{event.year}</span>
              <div>
                <h3>{event.title}</h3>
                <p>{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="glass-card contact-card">
          <h2>Let&apos;s build something together</h2>
          <p>
            Reach out if you&apos;d like to collaborate on web projects,
            internships, or AI-driven ideas.
          </p>

          <div className="contact-grid">
            <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              github.com/yourusername
            </a>
            <span>Maharashtra, India</span>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Neel Chavan</p>
      </footer>
    </>
  );
}

export default App;
