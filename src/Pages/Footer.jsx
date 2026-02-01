import React, { useEffect, useState } from "react";
import "./Web.css";
import myPhoto from "../assets/MY.png"; // ✅ removed space

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Sanket-Jundhare", icon: "fab fa-github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sanket-jundhare/", icon: "fab fa-linkedin" },
  { name: "Twitter", url: "https://x.com/sanket_jundhare", icon: "fab fa-twitter" },
  { name: "Email", url: "mailto:sanketjundhare@gmail.com", icon: "fas fa-envelope" },
];

const funFacts = [
  "Did you know? The first computer bug was an actual moth! 🦋",
  "IoT gadgets are my weekend jam!",
  "I once played a melody on a buzzer for a project.",
  "I love hackathons and tech memes!",
  "Ctrl+Z is my favorite superpower.",
  "Tip: Use Ctrl+Shift+L to select all occurrences of a word in VS Code.",
  "Tip: Use semantic HTML for better accessibility.",
  "Tip: Commit early, commit often.",
  "Tip: Don’t repeat yourself (DRY principle)."
];

const mascot = (
  <span className="footer-mascot" role="img" aria-label="robot">🤖</span>
);

const Footer = () => {
  const [factIdx, setFactIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIdx(idx => (idx + 1) % funFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="creative-footer creative-footer-glow">
      {/* Confetti */}
      <div className="footer-confetti-bg">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={`confetti-${i}`} // ✅ stable key
            className={`footer-confetti confetti-${i + 1}`}
          />
        ))}
      </div>

      <div className="footer-glow-border-top"></div>

      {/* Particles */}
      <div className="footer-particles-bg">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`particle-${i}`} // ✅ stable key
            className={`footer-particle particle-${i + 1}`}
          />
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-branding">
            <span className="footer-logo">
              <img
                src={myPhoto}
                alt="Sanket Jundhare"
                className="footer-avatar"
              />
              Sanket Jundhare {mascot}
            </span>

            <span className="footer-tagline">
              Bridging Interfaces & Intelligence{" "}
              <span className="footer-emoji">🚀</span>
            </span>

            <span className="footer-funfact">
              <span role="img" aria-label="sparkle">✨</span>{" "}
              {funFacts[factIdx]}
            </span>

            <span className="footer-madein">
              Made with <span className="footer-heart">❤️</span> in India 🇮🇳
            </span>

            <span className="footer-copyright">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="footer-socials creative-footer-socials">
            {socialLinks.map((link, i) => (
              <a
                key={link.name} // ✅ stable key
                href={link.url}
                target={link.name === "Email" ? "_self" : "_blank"}
                rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                className={`footer-social-link creative-social-link animate-social-${i + 1}`}
                title={link.name}
              >
                <i className={link.icon}></i>
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom-quote">
          <span className="footer-quote">
            “Code is like humor. When you have to explain it, it’s bad.”{" "}
            <span className="footer-emoji">💡</span>
          </span>
        </div>

        <button
          className="footer-back-to-top left"
          onClick={handleBackToTop}
          title="Back to Top"
        >
          <span className="footer-back-arrow">↑</span>{" "}
          <span className="footer-back-text">Back to Top</span>
        </button>
      </div>

      <div className="footer-glow-border"></div>
    </footer>
  );
};

export default Footer;
