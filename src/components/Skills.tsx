import React from 'react';

const skillsData: Record<string, string[]> = {
  "Languages": ["C", "C++", "Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C#"],
  "Cloud & DevOps": ["AWS Lambda", "ECS", "CloudWatch", "CloudFormation", "SQS", "DynamoDB", "Docker", "Kubernetes", "Git"],
  "Frameworks": ["React.js", "Redux", "Express.js", "Node.js", "Django", "ASP.NET", "Flask", "Angular"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
  "ML & Data": ["Pandas", "NumPy", "Scikit-learn", "Keras", "PyTorch"]
};

export default function Skills() {
  return (
    <section className="py-5 bg-body-secondary">
      <div className="container">
        <h2 className="display-6 fw-bold mb-5 section-title">Skills & Technologies</h2>
        <div className="row g-4">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3" style={{color: '#667eea'}}>{category}</h5>
                  <div>
                    {items.map((skill, i) => (
                      <span key={i} className="badge bg-light text-dark skill-badge border">
                        {skill}
                      </span>
                    ))}
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