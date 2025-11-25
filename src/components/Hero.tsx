import { Github, Linkedin, Mail, Download, Briefcase, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-md-4 text-center">
                        <div className="hero-avatar mx-auto">
                            MG
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <span className="stat-badge">
                                <Briefcase size={16} className="me-2" style={{ display: 'inline' }} />
                                Software Engineer
                            </span>
                            <span className="stat-badge location-badge">
                                <MapPin size={16} className="me-2" style={{ display: 'inline' }} />
                                Seattle, Washington
                            </span>
                        </div>
                        <h1 className="display-4 fw-bold mb-3">
                            Building scalable systems at Amazon
                        </h1>
                        <p className="lead mb-4">
                            Software Development Engineer passionate about cloud infrastructure, CI/CD pipelines,
                            and creating efficient solutions that serve millions of users worldwide. Currently working
                            on Prime Video & MGM Studios telemetry services handling 10M+ daily events.
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                        <a
                            href="https://github.com/MitanshuGada"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark"
                        >
                        <Github size={20} className="me-2" />
                            GitHub
                        
                        </a>
                        <a
                            href="https://linkedin.com/in/mitanshug"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                        <Linkedin size={20} className="me-2" />
                        LinkedIn
                    </a>
                    <a
                    href="mailto:mitanshugada@gmail.com"
                    className="btn btn-outline-secondary"
                        >
                    <Mail size={20} className="me-2" />
                    Email
                </a>
                <button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                    className="btn btn-outline-secondary"
                >
                    <Download size={20} className="me-2" />
                    Resume
                </button>
            </div>
        </div>
        </div >
      </div >
    </section >
  );
}