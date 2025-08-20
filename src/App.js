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
          <p className="hero-subtitle">Lead Product Engineer & AI Solutions Architect</p>
          <p className="hero-description">
            15 years of experience creating enterprise engineering products. An agentic AI learner and practitioner 
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
              Pragmatic engineer with 15 years of experience in building world‑class products, with deep expertise in Azure AI and Generative AI.
              I design agentic systems, optimize agent behaviors, and integrate intelligent, scalable solutions that transform enterprise operations.
            </p>
            <p>
              I’m passionate about mentoring teams, fostering innovation, and bridging research with engineering to create resilient, AI‑driven systems.
              I guide cross‑functional teams through the full product lifecycle and deliver customer‑centric solutions.
            </p>
            <p>
              Recent impact: built a FastAPI‑based RAG app leveraging ChromaDB and Azure OpenAI; promoted AI‑assisted SDLC with GitHub Copilot and Cursor
              increasing team productivity by ~50%; used AI‑augmented code reviews to reduce post‑release defects by ~20%; and supported sales with
              product demos showcasing AI capabilities.
            </p>
            <ul className="resume-list">
              <li>Built FastAPI-based RAG with ChromaDB + Azure OpenAI for intelligent document processing.</li>
              <li>Scaled AI-assisted SDLC with GitHub Copilot and Cursor; boosted team productivity by ~50%.</li>
              <li>Drove AI-augmented code reviews; reduced post-release defects by ~20%.</li>
              <li>Architected and deployed microservices across Azure Functions, Container Apps, and AKS.</li>
            </ul>
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
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">LangGraph</span>
                <span className="skill-tag">Streamlit</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">Azure DevOps</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">ChromaDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Messaging & Integration</h3>
              <div className="skill-tags">
                <span className="skill-tag">Apache Kafka</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure OpenAI</span>
                <span className="skill-tag">Vertex AI</span>
                <span className="skill-tag">Embeddings</span>
                <span className="skill-tag">RAG (Retrieval-Augmented Generation)</span>
                <span className="skill-tag">ChromaDB</span>
                <span className="skill-tag">Vector Databases</span>
                <span className="skill-tag">LLMs</span>
                <span className="skill-tag">AI Integration</span>
                <span className="skill-tag">GitHub Copilot</span>
                <span className="skill-tag">MCP</span>
                <span className="skill-tag">Copilot Studio</span>
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
              <a href="tel:+918939914744" className="contact-link">Phone</a>
              <span className="contact-link" aria-hidden>Chennai</span>
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
