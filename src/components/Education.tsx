import { MapPin, Calendar } from 'lucide-react';
import osuLogo from "../assets/osu_horizontal_2c_o_over_b.webp";
import kjsceLogo from "../assets/kjsce.svg";

interface EducationItem {
    school: string;
    logo: string;
    degree: string;
    major: string;
    location: string;
    period: string;
    gpa: string;
}

const educationData: EducationItem[] = [
    {
        school: "Oregon State University",
        logo: osuLogo,
        degree: "Master of Science",
        major: "Computer Science",
        location: "Oregon, USA",
        period: "Sep 2022 - Dec 2024",
        gpa: "3.76/4.00"
    },
    {
        school: "K. J. Somaiya College of Engineering",
        logo: kjsceLogo,
        degree: "Bachelor of Technology (B. Tech.)",
        major: "Information Technology",
        location: "Mumbai, India",
        period: "Aug 2019 - Jun 2022",
        gpa: "8.82/10.00"
    }
];

export default function Education() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="display-6 fw-bold mb-5 section-title">Education</h2>
                <div className="row g-4">
                    {educationData.map((edu, idx) => (
                        <div key={idx} className="col-md-6">
                            <div className="card education-card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <img
                                            src={edu.logo}
                                            alt={`${edu.school} Logo`}
                                            style={{
                                                height: '60px',
                                                width: '60px',
                                                objectFit: 'contain',
                                                padding: '8px',
                                                background: 'white',
                                                borderRadius: '8px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-bold">{edu.degree}</h5>
                                            <p className="text-primary mb-1">{edu.school}</p>
                                            <p className="text-muted small mb-0">{edu.major}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="text-muted small">
                                            <MapPin size={14} className="me-1" style={{ display: 'inline' }} />
                                            {edu.location}
                                        </span>
                                        <span className="badge bg-secondary">
                                            GPA: {edu.gpa}
                                        </span>
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-muted small">
                                            <Calendar size={14} className="me-1" style={{ display: 'inline' }} />
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}