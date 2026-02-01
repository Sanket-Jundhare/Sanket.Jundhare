// File: Web.jsx

import React, { useState, useEffect } from "react";
import "./Web.css";
import Assistant from "./Assistant";

const GalaxyProjects = () => {
  const projects = [
    {
      name: "MSRTC Bus App",
      desc: "Android app to manage state transport operations.",
      tech: "Java, Android Studio",
      link: "https://youtu.be/yX7YHDLOAZo"
    },
    {
      name: "RFID Bus Pass",
      desc: "RFID-based ticketing system for buses.",
      tech: "RFID, Embedded C",
      link: "https://youtube.com/shorts/uH7fOWqhWSA"
    },
    {
      name: "IoT Sensor Grid",
      desc: "Smart sensors demoed in live videos.",
      tech: "NodeMCU, Sensors",
      link: "https://youtube.com/shorts/C20gi191lek"
    }
  ];

  return (
    <div className="project-gallery">
      {projects.map((proj) => (
        <div key={proj.name} className="card"> {/* ✅ stable key */}
          <h3>{proj.name}</h3>
          <p>{proj.desc}</p>
          <small>
            <strong>Tech:</strong> {proj.tech}
          </small>
          <a href={proj.link} target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      ))}
    </div>
  );
};

const TerminalToggle = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("terminal-mode", active);

    // ✅ cleanup to avoid stuck class
    return () => {
      document.body.classList.remove("terminal-mode");
    };
  }, [active]);

  return (
    <button
      className="terminal-toggle"
      onClick={() => setActive((prev) => !prev)}
    >
      {active ? "🖥️ Exit Terminal Mode" : "🖥️ Terminal Mode"}
    </button>
  );
};

const Web = () => {
  return (
    <div className="retro-container">
      {/* Debug: Test direct PDF link */}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <a
          href="/Sanket_Jundhare_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00f0ff", fontWeight: "bold" }}
        >
          Test Resume Link (opens PDF)
        </a>
      </div>

      <div className="starfield"></div>
      <div className="crt-overlay"></div>

      <TerminalToggle />

      <div className="hero">
        <h1 className="glow">Sanket Jundhare</h1>
        <p className="tagline typewriter">
          Bridging Interfaces and Intelligence — One Circuit at a Time.
        </p>
        <p className="sub">
          Frontend Developer | Researcher | IoT Explorer
        </p>

        <a
          className="resume-button"
          href="/Sanket_Jundhare_Resume.pdf"
          download="Sanket_Jundhare_Resume.pdf"
        >
          ⬇ Download Resume
        </a>
      </div>

      <section className="section">
        <h2>Project Galaxy</h2>
        <GalaxyProjects />
      </section>

      <Assistant />
    </div>
  );
};

export default Web;
