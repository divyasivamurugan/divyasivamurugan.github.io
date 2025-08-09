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
          <p className="hero-subtitle">Lead Product Software Engineer & Enterprise Solutions Architect</p>
          <p className="hero-description">
            14+ years of experience creating enterprise engineering products. An agentic AI learner and practitioner 
            passionate about integrating AI into engineering workflows while guiding teams to deliver scalable solutions.
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
              I am a lead product software engineer with 14+ years of experience creating enterprise engineering products 
              and building sophisticated software applications. I work closely with stakeholders to ensure successful 
              product deliverables and drive product success through technical excellence and strategic collaboration. 
              I have worked with architects and been involved in designing product capabilities, contributing significantly 
              towards the overall design and architecture decisions.
            </p>
            <p>
              My primary objective is guiding development teams in delivering robust, scalable enterprise products that make 
              a meaningful impact. I participate in customer demos and meetings to gather requirements alongside product owners, 
              ensuring that our engineering solutions align with business objectives and customer needs. I have provided many 
              customer demos and supported sales initiatives, effectively bridging the gap between technical capabilities and 
              business value.
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
              <h3>Enterprise Document Management Microservices</h3>
              <p>
                Integrating Spring-based monolith web applications with enterprise document management 
                servers enabling seamless document workflows across multiple platforms using microservices integration application.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">Microservices</span>
                <span className="tech-tag">Alfresco</span>
                <span className="tech-tag">IBM FileNet</span>
                <span className="tech-tag">SharePoint Online</span>
                <span className="tech-tag">iManage</span>
                <span className="tech-tag">OpenText eDOCS</span>
              </div>
              <div className="project-links">
                <a href="#contact" className="project-link">
                  Contact for Details
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
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Groovy</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Hibernate</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Streamlit</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Azure DevOps</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Messaging & Integration</h3>
              <div className="skill-tags">
                <span className="skill-tag">Apache Pulsar</span>
                <span className="skill-tag">Dapr</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure OpenAI</span>
                <span className="skill-tag">RAG (Retrieval-Augmented Generation)</span>
                <span className="skill-tag">ChromaDB</span>
                <span className="skill-tag">Vector Databases</span>
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">AI Integration</span>
                <span className="skill-tag">GitHub Copilot</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Methodologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Scrum</span>
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
              <a href="https://www.linkedin.com/in/divya-sivamurugan-8333032b/" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </a>
              <a href="mailto:divvy13@gmail.com" className="contact-link">
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
