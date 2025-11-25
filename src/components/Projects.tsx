import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  period: string;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    name: "ChatOSU (Gen AI)",
    description: "Empowering students with query-based access through LLMs for instant information retrieval across departments.",
    tech: ["Express.js", "React", "TypeScript", "LLMs"],
    github: "https://github.com/MitanshuGada",
    period: "Oct 2023 - Jun 2024",
    highlights: ["Backend-For-Frontend (BFF) architecture", "Data ingestion pipelines", "LLM fine-tuning"]
  },
  {
    name: "SpeedGolf",
    description: "Comprehensive speedgolf application to track rankings, display leaderboards, and manage tournaments.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/MitanshuGada",
    period: "Sep 2023 - Sep 2024",
    highlights: ["Tournament management", "Real-time leaderboards", "Member notifications"]
  },
  {
    name: "TradeXa",
    description: "Cross-platform web application with stock price predictions using LSTM neural networks and sentiment analysis.",
    tech: ["React", "Express.js", "Node.js", "PostgreSQL", "LSTM"],
    github: "https://github.com/MitanshuGada",
    period: "Aug 2021 - May 2022",
    highlights: ["Neural Network with LSTM", "Sentiment Analysis", "Live stock prices"]
  },
  {
    name: "Talking Hands",
    description: "Sign language recognition application trained on YOLO v3 model with 78% test accuracy.",
    tech: ["YOLO v3", "Python", "Computer Vision"],
    github: "https://github.com/MitanshuGada",
    period: "Jan 2019 - Apr 2019",
    highlights: ["18000 training iterations", "78% accuracy", "Real-time recognition"]
  }
];

export default function Projects() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-6 fw-bold mb-5 section-title">Projects</h2>
        <div className="row g-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-6">
              <div className="card project-card">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title fw-bold">{project.name}</h5>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary"
                      style={{transition: 'color 0.2s'}}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                  <p className="card-text mb-3">{project.description}</p>
                  <div className="mb-3">
                    <strong className="small text-muted d-block mb-2">Key Features:</strong>
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="highlight-item small mb-1">{highlight}</div>
                    ))}
                  </div>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-secondary skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted small mb-0">
                    <Calendar size={14} className="me-1" style={{display: 'inline'}} />
                    {project.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}