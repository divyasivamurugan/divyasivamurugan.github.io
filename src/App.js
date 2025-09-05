import React, { useState, useEffect } from 'react';
import './App.css';

// Professional portfolio data
const portfolioData = {
  personal: {
    name: "Divya Sivamurugan",
    title: "Pragmatic Engineer & AI Solutions Architect",
    email: "divvy13@gmail.com",
    
    linkedin: "https://linkedin.com/in/divyasivamurugan",
    github: "https://github.com/divyasivamurugan",
    website: "https://divyas.dev",
    location: "Chennai, India"
  },
  summary: "Highly innovative and pragmatic engineer with 15 years of experience in building world-class products. Deep expertise in Azure AI and Generative AI, specializing in designing advanced agentic systems, optimizing agent behaviors, and seamlessly integrating intelligent, scalable solutions to transform enterprise operations.",
  experience: [
    {
      period: "Jan 2025 - Present",
      role: "Lead Product Engineer & AI Solutions Architect",
      company: "Wolters Kluwer Elm Solutions",
      location: "Chennai",
      description: "Leading end-to-end design and development of GenAI applications with focus on RAG and adaptive prompting strategies.",
      achievements: [
        "Led GenAI application development using Python and Java with RAG and adaptive prompting",
        "Engineered robust prompt workflows including chaining and dynamic tool calling using MCP",
        "Developed semantic search capabilities using ChromaDB and embedding models",
        "Integrated AI capabilities into product workflows enhancing customer experience",
        "Implemented Azure DevOps pipelines for consistent deployments across environments"
      ]
    },
    {
      period: "Apr 2021 - Dec 2024",
      role: "Lead Software Engineer",
      company: "Wolters Kluwer Elm Solutions",
      location: "Chennai",
      description: "Architected and deployed microservices across diverse Azure workloads, establishing MLOps frameworks and engineering excellence.",
      achievements: [
        "Pioneered organization's first enterprise-grade RAG platform on FastAPI, ChromaDB, Azure OpenAI",
        "Reduced manual document handling by 80% through automation",
        "Implemented MLOps framework with AI-powered code reviews reducing defects by 20%",
        "Led 20+ member engineering team adopting AI-assisted development tools",
        "Boosted team productivity by over 50% through standardized best practices"
      ]
    },
    {
      period: "Apr 2016 - Mar 2021",
      role: "Senior Software Engineer",
      company: "Wolters Kluwer Elm Solutions",
      location: "Chennai",
      description: "Designed Spring Boot microservices and improved system performance while leading architectural initiatives.",
      achievements: [
        "Designed and implemented Spring Boot microservices architecture",
        "Improved system performance by 30% via JVM, SQL, and Redis optimizations",
        "Deployed Docker containers on Kubernetes using Azure DevOps and Bitbucket",
        "Secured APIs with OAuth2, JWT, and RBAC (OWASP compliant)",
        "Led code reviews and mentored junior developers"
      ]
    },
    {
      period: "Apr 2014 - Mar 2016",
      role: "Software Engineer",
      company: "Datacert Inc",
      location: "Chennai",
      description: "Developed enterprise applications and migrated legacy systems to modern architectures.",
      achievements: [
        "Developed reusable components using Java, RESTful APIs, JQuery, and Spring",
        "Migrated legacy .NET application to Java-based architecture",
        "Ensured complete unit test coverage for continuous integration",
        "Practiced Agile Scrum with active participation in sprint ceremonies"
      ]
    },
    {
      period: "Oct 2010 - Mar 2013",
      role: "Analyst - System Development",
      company: "Verizon Data Services Pvt Ltd",
      location: "Chennai",
      description: "Developed maintenance systems and fault-tolerant applications while mentoring junior developers.",
      achievements: [
        "Developed maintenance ticketing system using Spring framework and RESTful services",
        "Built fault-tolerant system for network monitoring and management",
        "Mentored junior team members on technical best practices",
        "Boosted workflow efficiency by 10% through strategic refactoring",
        "Contributed to testing efforts using JUnit and Mockito"
      ]
    }
  ],
  projects: [
    {
      title: "Enterprise RAG Platform Architecture",
      description: "Pioneered organization's first enterprise-grade Retrieval-Augmented Generation (RAG) platform, establishing architectural standards for intelligent document processing across the business.",
      technologies: ["Python", "FastAPI", "ChromaDB", "Azure OpenAI", "LangChain", "LangGraph", "Docker"],
      highlights: [
        "First enterprise-grade RAG platform in organization",
        "Established technical roadmap for future GenAI applications",
        "Built on FastAPI, ChromaDB, and Azure OpenAI stack",
        "Set architectural standards for intelligent document processing"
      ],
      status: "Production",
      category: "AI/ML Architecture"
    },
    {
      title: "AI-Powered MLOps Framework",
      description: "Engineered comprehensive MLOps framework incorporating AI-powered code reviews, advanced monitoring, and observability for complete model lifecycle management.",
      technologies: ["Python", "Azure ML", "Azure DevOps", "SonarQube", "Black Duck", "Kubernetes"],
      highlights: [
        "20% reduction in post-release defects through AI code analysis",
        "Shift-left approach integrated into CI/CD pipeline",
        "Complete model lifecycle management with automated monitoring",
        "Enterprise-scale reliability and security compliance"
      ],
      status: "Production",
      category: "MLOps"
    },
    {
      title: "Agentic AI Systems with Dynamic Tool Calling",
      description: "Developed sophisticated agent-based systems using Model Context Protocol (MCP) for dynamic tool calling and prompt chaining workflows.",
      technologies: ["Python", "LangChain", "LangGraph", "MCP", "Azure OpenAI", "Semantic Kernel"],
      highlights: [
        "Advanced prompt chaining and dynamic tool calling",
        "Agent-based systems for complex workflow automation",
        "Context-aware retrieval with semantic search",
        "Integrated Model Context Protocol for enhanced capabilities"
      ],
      status: "Production",
      category: "Agentic AI"
    },
    {
      title: "Azure Microservices Architecture",
      description: "Architected and deployed scalable microservices across Azure Functions, Container Apps, and AKS, optimizing for resilience and cost-efficiency.",
      technologies: ["Java", "Spring Boot", "Azure Functions", "Azure Container Apps", "AKS", "Docker"],
      highlights: [
        "80% reduction in manual document handling through automation",
        "30% performance improvement via JVM, SQL, and Redis optimization",
        "OAuth2, JWT, and RBAC security implementation (OWASP compliant)",
        "Robust CI/CD pipelines with Azure DevOps"
      ],
      status: "Production",
      category: "Cloud Architecture"
    }
  ],
  skills: {
    "AI/ML Architecture": [
      "Agentic AI Systems", "Distributed Systems Design", "LLM Integration", "RAG Patterns", 
      "Service-Oriented Architecture", "LangChain", "LangGraph", "Semantic Kernel", 
      "AI Governance & Security", "Model Context Protocol (MCP)"
    ],
    "Cloud & MLOps Infrastructure": [
      "Azure (Expert)", "Azure ML", "Databricks", "Vertex AI", "SageMaker", "GCP", "AWS", 
      "Kubernetes", "Docker", "Terraform", "CI/CD (GitHub Actions)", "Azure DevOps", "Observability"
    ],
    "Programming & Frameworks": [
      "Python", "Java", "Groovy", "FastAPI", "Spring Boot", "Streamlit", "Hibernate", 
      "RESTful APIs", "Microservices", "OAuth2", "JWT", "RBAC"
    ],
    "Data Platforms & Integration": [
      "Vector Databases (ChromaDB, Pinecone, Weaviate)", "PostgreSQL", "MongoDB", 
      "Apache Kafka", "Feature Stores", "Data Orchestration", "Real-Time Inference",
      "SonarQube", "Black Duck"
    ]
  },
  certifications: [
    {
      title: "End-to-end machine learning operations (MLOps) with Azure Machine Learning",
      issuer: "Microsoft Learn",
      date: "2024",
      description: "Comprehensive certification covering MLOps practices, Azure ML pipelines, model deployment, and monitoring in production environments.",
      image: "/Microsoft_ML_OPS_Certification.png",
      credentialUrl: "https://learn.microsoft.com/en-us/training/paths/build-ai-solutions-with-azure-ml-service/"
    },
    {
      title: "Azure Kubernetes Service (AKS)",
      issuer: "LinkedIn Learning",
      date: "2023",
      description: "Comprehensive training on Azure Kubernetes Service for container orchestration and management in cloud environments."
    },
    {
      title: "SAFE Agile Fundamentals",
      issuer: "LinkedIn Learning", 
      date: "2022",
      description: "Foundation certification in Scaled Agile Framework (SAFe) principles and practices for enterprise agile transformation."
    }
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Anna University",
    period: "2006 - 2010",
    location: "Chennai, India"
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">{portfolioData.personal.name}</div>
          <ul className="nav-menu">
            {['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'].map(section => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{portfolioData.personal.name}</h1>
          <h2 className="hero-subtitle">{portfolioData.personal.title}</h2>
          <p className="hero-location">📍 {portfolioData.personal.location}</p>
          <p className="hero-description">{portfolioData.summary}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Team Members Led</span>
            </div>
            <div className="stat">
              <span className="stat-number">80%</span>
              <span className="stat-label">Process Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm an accomplished engineering leader with 15 years of experience, specializing in the 
                development of scalable enterprise applications. I have proven expertise in guiding 
                cross-functional teams, overseeing the entire product development lifecycle, and 
                delivering customer-centric solutions.
              </p>
              <p>
                As a highly innovative and pragmatic engineer with deep expertise in Azure AI and 
                Generative AI, I excel at designing advanced agentic systems, optimizing agent behaviors, 
                and seamlessly integrating intelligent, scalable solutions to transform enterprise operations.
              </p>
              <p>
                I am passionate about mentoring teams, fostering innovation, and bridging the gap between 
                research and engineering to create resilient, AI-driven systems that deliver measurable 
                business impact.
              </p>
            </div>
            
            <div className="about-highlights">
              <h3>Leadership Highlights</h3>
              <ul className="highlights-list">
                <li>✅ Strategic Architecture & Vision - Pioneered enterprise RAG platforms</li>
                <li>✅ Advanced MLOps Implementation - 20% defect reduction through AI</li>
                <li>✅ Team Leadership - Led 20+ member engineering teams</li>
                <li>✅ Innovation & Mentorship - 50%+ productivity boost through best practices</li>
                <li>✅ Enterprise Solutions - Azure AI and Generative AI expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-list">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className={`experience-item ${index === 0 ? 'current' : ''}`}>
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}{exp.location && `, ${exp.location}`}</h4>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                <p className="experience-desc">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.slice(0, 4).map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                  {exp.achievements.length > 4 && (
                    <li style={{ color: '#7f8c8d', fontStyle: 'italic', fontSize: '0.85rem' }}>
                      +{exp.achievements.length - 4} more achievements
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className={`project-card ${index === 0 ? 'featured' : ''}`}>
                {index === 0 && <div className="project-badge">Featured</div>}
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-category">
                  <span className="category-tag">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {Object.entries(portfolioData.skills).map(([category, skills], index) => (
              <div key={category} className={`skill-category ${index === 0 ? 'highlight' : ''}`}>
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Professional Certifications</h2>
          <div className="certifications-list">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                {cert.image && (
                  <div className="certification-badge">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                )}
                <div className="certification-content">
                  <div className="certification-header">
                    <h3>{cert.title}</h3>
                    <div className="certification-year">{cert.date}</div>
                  </div>
                  <h4 className="certification-issuer">{cert.issuer}</h4>
                  <p className="certification-description">{cert.description}</p>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <div className="education-content">
              <h3>{portfolioData.education.degree}</h3>
              <h4 className="education-institution">{portfolioData.education.institution}</h4>
              <div className="education-meta">
                <span className="education-period">{portfolioData.education.period}</span>
                <span className="education-location">{portfolioData.education.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations. Whether you're looking to build AI solutions, optimize 
              ML operations, or explore emerging technologies, I'd love to hear from you.
            </p>
            
            <div className="contact-cta">
              <h3>Ready to work together?</h3>
              <p>Let's discuss how I can help bring your AI/ML vision to life.</p>
            </div>

            <div className="contact-links">
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="contact-link primary"
                aria-label="Send email"
              >
                📧 {portfolioData.personal.email}
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                💼 LinkedIn
              </a>
              <a 
                href={portfolioData.personal.github} 
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                🔗 GitHub
              </a>
              <a 
                href="/Divya%20Sivamurugan%20-%20AI_ML%20Ops.pdf" 
                className="contact-link"
                download
                aria-label="Download resume"
              >
                📄 Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h4>{portfolioData.personal.name}</h4>
              <p>{portfolioData.personal.title}</p>
              <p>Building the future with AI/ML</p>
            </div>
            <div className="footer-links">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`mailto:${portfolioData.personal.email}`}>Email</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 {portfolioData.personal.name}. All rights reserved.</p>
            <p>Built with React • Designed for Impact</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;