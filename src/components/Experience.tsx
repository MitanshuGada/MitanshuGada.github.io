import { MapPin, Calendar } from 'lucide-react';
import amazonLogo from "../assets/Amazon_logo.svg";
import osuLogo from "../assets/osu_horizontal_2c_o_over_b.webp";
import vsplLogo from "../assets/VSPL.png";

interface ExperienceItem {
    company: string;
    logo: string;
    role: string;
    team?: string;
    location: string;
    period: string;
    achievements: string[];
    type?: 'Full-time' | 'Internship' | 'Part-time';
}

const experienceData: ExperienceItem[] = [
    {
        company: "Amazon",
        logo: amazonLogo,
        role: "Software Development Engineer I",
        team: "Prime Video & MGM Studios",
        location: "Seattle, Washington",
        period: "Sep 2024 - Present",
        type: "Full-time",
        achievements: [
            "Built full CI/CD pipeline saving team 12 weeks of effort annually",
            "Designed telemetry services handling 10M+ events daily worldwide",
            "Reduced survey arbitration latency by 30% with ElastiCache caching",
            "Integrated Slack alerting reducing Android pipeline blockages by 20%"
        ]
    },
    {
        company: "Oregon State University",
        logo: osuLogo,
        role: "Graduate Teaching & Research Assistant",
        team: "CS 461, CS 370, CS 444",
        location: "Corvallis, Oregon",
        period: "Apr 2023 - Jun 2024",
        type: "Part-time",
        achievements: [
            "Mentored 16 students by holding regular team meetings, providing guidance and support for success in their ML projects",
            "Conducted regular office hours for personalized assistance with complex concepts",
            "Assisted in debugging labs in C++ and helped over 60+ students"
        ]
    },
    {
        company: "Center for Applied Systems and Software",
        logo: osuLogo,
        role: "Software Developer",
        location: "Corvallis, Oregon",
        period: "Jun 2023 - Sep 2023",
        type: "Internship",
        achievements: [
            "Utilized Dapr and RabbitMQ for pub-sub architecture in scalable microservices, increasing system efficiency by 20%",
            "Implemented containerization using Docker to optimize resource utilization and deployment processes",
            "Integrated Google Maps API for plotting supply chains and location-based functionalities",
            "Enhanced ODOT software system using HTML, JS, jQuery, and C#"
        ]
    },
    {
        company: "Voltamp Solar Panacea",
        logo: vsplLogo,
        role: "Software Development Engineer - Team Leader",
        location: "Mumbai, India",
        period: "Jun 2021 - Sep 2021",
        type: "Internship",
        achievements: [
            "Created web app for employees to generate inspection reports and view pending projects",
            "Implemented server-side using Django and designed frontend using HTML5, CSS, JavaScript, and AJAX",
            "Led development team of 3 to curate application per client requirements",
            "Built efficient, normalized database on MongoDB for storing files and reports"
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
                                            <h5 className="text-primary mb-1">{exp.company} {exp.team && ` - ${exp.team}`}</h5>
                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                <span className="text-muted small">
                                                    <MapPin size={14} className="me-1" style={{ display: 'inline' }} />
                                                    {exp.location}
                                                </span>
                                                {exp.type && (
                                                    <span className={`badge ${exp.type === 'Full-time' ? 'bg-success' :
                                                            exp.type === 'Part-time' ? 'bg-info' :
                                                                'bg-warning'
                                                        }`} style={{ fontSize: '0.7rem' }}>
                                                        {exp.type}
                                                    </span>
                                                )}
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