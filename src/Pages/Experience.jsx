import React from "react";
import "./Web.css";

const experiences = [
  {
    company: "Thought Bliss Solutions",
    role: "Intern",
    duration: "2024 (3 months)",
    description:
      "Worked as an intern, gaining hands-on experience in software development and team collaboration."
  },
  {
    company: "HCL Technologies",
    role: "Web Developer Intern",
    duration: "June - September 2026 (4 months)",
    description:
      "Built an Outage Management System using Spring Boot and Angular. Responsible for full-stack development, API integration, and UI/UX improvements."
  },
  {
    company: "Daigloues Media",
    role: "UI/UX Designer & Web Developer",
    duration: "July - September 2026(3 months)",
    description:
      "Worked as a UI/UX Designer and Web Developer, creating modern interfaces and web applications using React. Collaborated with design and development teams to deliver user-centric solutions."
  }
];

const Experience = () => (
  <div className="section experience-section section-animated">
    <h2 className="animated-heading">Experience</h2>

    <div className="experience-glass-list">
      {experiences.map((exp) => {
        const company = exp.company || "";

        const icon = company.match(/HCL/i)
          ? "💼"
          : company.match(/Thought/i)
          ? "🧠"
          : company.match(/Daigloues/i)
          ? "🎨"
          : "🏢";

        return (
          <div
            className="glass-panel"
            key={`${exp.company}-${exp.role}`} // ✅ stable key
          >
            <div className="glass-accent"></div>

            <div className="glass-company-icon">
              {icon}
            </div>

            <div className="glass-content">
              <div className="glass-company">{exp.company}</div>
              <div className="glass-role">{exp.role}</div>
              <div className="glass-duration">{exp.duration}</div>
              <div className="glass-desc">{exp.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Experience;
