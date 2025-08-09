import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Divya Sivamurugan</h2>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Divya Sivamurugan</h1>
          <p className="hero-subtitle">Software Developer & Problem Solver</p>
          <p className="hero-description">
            Passionate about creating innovative solutions and building impactful applications
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a dedicated software developer with experience in building web applications,
              working with modern technologies, and solving complex problems. I enjoy learning
              new technologies and applying them to create meaningful solutions.
            </p>
            <p>
              Currently working on various projects including RAG document assistants,
              web applications, and exploring the latest in AI and machine learning technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>RAG Document Assistant</h3>
              <p>
                A production-ready FastAPI-based Retrieval-Augmented Generation application
                with ChromaDB and Azure OpenAI integration for intelligent document processing.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Azure OpenAI</span>
                <span className="tech-tag">ChromaDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/DivyaDinesh-chen/rag-doc-assistant" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code
                </a>
              </div>
            </div>

            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                A responsive React-based portfolio website deployed on GitHub Pages,
                showcasing my projects and skills with modern web technologies.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">GitHub Pages</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/divyasivamurugan/divyasivamurugan.github.io" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Streamlit</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="contact-links">
              <a href="https://github.com/divyasivamurugan" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/divyasivamurugan" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
              <a href="mailto:divya@example.com" className="contact-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Divya Sivamurugan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
