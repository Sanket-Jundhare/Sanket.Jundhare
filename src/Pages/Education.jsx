import React from "react";
import "./Web.css";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sanjivani University",
    location: "Kopargaon, Maharashtra, India",
    period: "2024 - Ongoing",
    grade: "Current CGPA: 8.57"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Gautam Polytechnic Institute",
    location: "Kolpewadi, Maharashtra, India",
    period: "2022 - 2024",
    grade: "Passout Marks: 79.96%"
  },
  {
    degree: "11th & 12th Science",
    institution: "Shri Chatrapati Shivaji College",
    location: "Kolpewadi, Maharashtra, India",
    period: "2020 - 2022",
    grade: "Passout Marks: 55%"
  },
  {
    degree: "SSC (10th Grade)",
    institution: "Shri Chatrapati Shivaji Vidyalaya",
    location: "Kolpewadi, Maharashtra, India",
    period: "2015 - 2020",
    grade: "Passout Marks: 79.20%"
  },
  {
    degree: "Primary School (1st - 5th)",
    institution: "Gautam Public School",
    location: "Kolpewadi, Maharashtra, India",
    period: "2010 - 2015",
    grade: "A+ Grade"
  }
];

const Education = () => (
  <div className="section education-section section-animated">
    <h2 className="animated-heading">Education</h2>

    <div className="education-timeline">
      {educationData.map((edu) => (
        <div
          className="timeline-node"
          key={`${edu.degree}-${edu.period}`} // ✅ stable key
        >
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <div className="timeline-degree">{edu.degree}</div>
            <div className="timeline-institution">{edu.institution}</div>
            <div className="timeline-period">{edu.period}</div>
            <div className="timeline-location">{edu.location}</div>
            {edu.grade && (
              <div className="timeline-grade">{edu.grade}</div>
            )}
          </div>
        </div>
      ))}

      <div className="timeline-line"></div>
    </div>
  </div>
);

export default Education;
