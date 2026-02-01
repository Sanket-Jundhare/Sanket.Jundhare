import React from "react";
import "./Web.css";

const skillGroups = [
  {
    group: "Frontend",
    skills: [
      { name: "ReactJS", icon: "⚛️", level: 80 },
      { name: "JavaScript", icon: "🟨", level: 60 },
      { name: "HTML", icon: "🔶", level: 85 },
      { name: "CSS3", icon: "🔷", level: 80 }
    ]
  },
  {
    group: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: "🟩", level: 60 },
      { name: "Java", icon: "☕", level: 70 },
      { name: "Python", icon: "🐍", level: 50 },
      { name: "MySQL", icon: "🗄️", level: 50 },
      { name: "MongoDB", icon: "🍃", level: 60 }
    ]
  },
  {
    group: "IoT & Embedded",
    skills: [
      { name: "C & C++", icon: "💻", level: 75 },
      { name: "IoT", icon: "📡", level: 75 },
      { name: "Embedded Systems", icon: "🔌", level: 60 },
      { name: "Android Studio", icon: "🤖", level: 65 }
    ]
  }
];

// Flatten and sort all skills by level descending
const allSkills = skillGroups
  .flatMap(g => g.skills.map(skill => ({ ...skill, group: g.group })))
  .sort((a, b) => b.level - a.level);

const bubbleAnims = [
  "bubble-float-1",
  "bubble-float-2",
  "bubble-float-3",
  "bubble-float-4",
  "bubble-float-5",
  "bubble-float-6",
  "bubble-float-7",
  "bubble-float-8",
  "bubble-float-9",
  "bubble-float-10"
];

const Skills = () => (
  <div className="section skills-section">
    <h2 className="animated-heading">Skills</h2>

    <div className="skills-bubble-cloud">
      {allSkills.map((skill, i) => (
        <div
          key={`${skill.group}-${skill.name}`} // ✅ stable & unique
          className={`skill-bubble ${bubbleAnims[i % bubbleAnims.length]}`}
          style={{ animationDelay: `${(i % 7) * 0.5}s` }}
        >
          {skill.icon && (
            <span className="skill-bubble-icon" aria-hidden="true">
              {skill.icon}
            </span>
          )}
          <span className="skill-bubble-level">{skill.level}%</span>
          <span className="skill-bubble-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
