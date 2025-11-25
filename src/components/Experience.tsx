import { MapPin, Calendar } from 'lucide-react';
import amazonLogo from "../assets/Amazon_logo.svg";

interface ExperienceItem {
    company: string;
    logo: string;
    role: string;
    team: string;
    location: string;
    period: string;
    achievements: string[];
}

const experienceData: ExperienceItem[] = [
    {
        company: "Amazon",
        logo: amazonLogo,
        role: "Software Development Engineer I",
        team: "Prime Video & MGM Studios",
        location: "Seattle, Washington",
        period: "Sep 2024 - Present",
        achievements: [
            "Built full CI/CD pipeline saving team 12 weeks of effort annually",
            "Designed telemetry services handling 10M+ events daily worldwide",
            "Reduced survey arbitration latency by 30% with ElastiCache caching",
            "Integrated Slack alerting reducing Android pipeline blockages by 20%"
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-5 bg-body-secondary">
            <div className="container">
                <h2 className="display-6 fw-bold mb-5 section-title">Experience</h2>
                {experienceData.map((exp, idx) => (
                    <div key={idx} className="card experience-card mb-4">
                        <div className="card-body p-4">
                            <div className="row align-items-start g-4">
                                <div className="col-auto">
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} Logo`}
                                        className="company-logo"
                                    />
                                </div>
                                <div className="col">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                                        <div>
                                            <h4 className="mb-1">{exp.role}</h4>
                                            <h5 className="text-primary mb-1">{exp.company} - {exp.team}</h5>
                                            <div className="text-muted small">
                                                <MapPin size={14} className="me-1" style={{ display: 'inline' }} />
                                                {exp.location}
                                            </div>
                                        </div>
                                        <span className="badge bg-success">
                                            <Calendar size={14} className="me-1" style={{ display: 'inline' }} />
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="mt-3 mb-0">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="mb-2">{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}