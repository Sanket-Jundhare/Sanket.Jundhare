import React, { useState } from "react";
import "./Web.css";
import myPhoto from "../assets/My Photo.png"; // ✅ removed space from filename

const funFacts = [
  { icon: " ", text:"Researcher"},
  { icon: "⚛️", text: "React Enthusiast" },
  
  { icon: "📡", text: "IoT Explorer" },
  { icon: "🎨", text: "UI/UX Designer" },
  { icon: "🏆", text: "Certified Learner" }
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="section about-section section-animated">
      <div className="about-hero-row">
        <div className="about-avatar-col">
          <div
            className="about-avatar-glow"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          >
            <img
              src={myPhoto}
              alt="Sanket Jundhare"
              className="about-avatar-img"
            />
          </div>
        </div>

        <div className="about-info-col">
          <h2 className="about-name-gradient">Sanket Jundhare</h2>

          <div className="about-animated-tagline">
            <span>Frontend Developer</span>
            <span className="about-dot">•</span>
            <span>Researcher</span>
            <span className="about-dot">•</span>
            <span>IoT Explorer</span>
          </div>

          <p className="about-summary">
            Passionate about technology and innovation,Researcher, bridging interfaces and
            intelligence. Specialized in ReactJS, IoT, and modern web
            development.
          </p>

          <div className="about-fun-facts">
            {funFacts.map((fact) => (
              <div className="about-fun-fact-tile" key={fact.text}>
                <span className="about-fact-icon">{fact.icon}</span>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="about-quote-animated">
        <span role="img" aria-label="lab">🧪</span>{" "}
        <strong>A great problem solver</strong>
        <br />
        Collaborating on hands-on projects and fostering a culture of innovation
        and experimentation.
      </blockquote>

      <p className="about-cta">
        <span role="img" aria-label="rocket">🚀</span>{" "}
        Let's connect and collaborate on exciting opportunities!
      </p>

      {/* Photo Modal */}
      {isModalOpen && (
        <div className="photo-modal-overlay" onClick={closeModal}>
          <div
            className="photo-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <span>×</span>
            </button>

            <div className="modal-content">
              <img
                src={myPhoto}
                alt="Sanket Jundhare"
                className="modal-photo"
              />

              <div className="modal-info">
                <h3>Sanket Jundhare</h3>
                <p>Full Stack Developer & Tech Enthusiast</p>

                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-icon">🎓</span>
                    <span>B.Tech Computer Science</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>Sanjivani University</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">💻</span>
                    <span>React, Node.js, Python</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🔬</span>
                    <span>Tinkerers' Lab Member</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default About;
