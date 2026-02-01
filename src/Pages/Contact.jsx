import React, { useState } from "react";
import "./Web.css";
import myPhoto1 from "../assets/My Photo 1.png"; // ✅ removed space

const socials = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
    label: "Email",
    link: "https://mail.google.com/mail/?view=cm&to=sanketjundhare@gmail.com",
    className: "contact-social-email"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/sanket-jundhare/",
    className: "contact-social-linkedin"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    label: "GitHub",
    link: "https://github.com/Sanket-Jundhare",
    className: "contact-social-github"
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    label: "Twitter",
    link: "https://x.com/sanket_jundhare",
    className: "contact-social-twitter"
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    label: "YouTube",
    link: "https://www.youtube.com/@its__sanku",
    className: "contact-social-youtube"
  }
];

const funFacts = [
  "I love building IoT gadgets in my free time!",
  "Ask me about my favorite tech meme!",
  "I can play melodies on a buzzer (seriously!)",
  "I’m always up for a hackathon or tech talk."
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showFact] = useState(
    funFacts[Math.floor(Math.random() * funFacts.length)]
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ marginBottom: "80px" }}>
      <div className="section contact-section">
        <div className="contact-logo-row">
          <svg
            className="brand-icon"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="12" stroke="#00f0ff" strokeWidth="2" fill="#001d2b" />
            <circle className="brand-pulse" cx="16" cy="16" r="6" fill="#00f0ff" />
          </svg>

          <span
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "1.1em",
              color: "#00f0ff",
              letterSpacing: "0.08em"
            }}
          >
            Sanket
          </span>
        </div>

        <h2 className="animated-heading">
          Let’s Build Something Awesome Together!
        </h2>

        <div className="contact-flex-row">
          {/* Left */}
          <div className="contact-profile-card">
            <div className="profile-img-anim">
              <img
                src={myPhoto1}
                alt="Sanket Jundhare"
                className="contact-profile-img"
              />
              <span className="profile-wave" role="img" aria-label="wave">
                👋
              </span>
            </div>
            <h3 className="contact-profile-name">Sanket Jundhare</h3>
            <p className="contact-profile-role">
              Full Stack Developer & IoT Enthusiast
            </p>
          </div>

          {/* Right */}
          <div className="contact-form-card">
            {submitted ? (
              <p className="contact-thankyou">
                Thank you for reaching out!{" "}
                <span role="img" aria-label="confetti">🎉</span>
                {" "}I'll get back to you soon.
              </p>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="contact-send-btn">
                  <span className="contact-send-plane">✈️</span> Send
                </button>
              </form>
            )}

            <div className="contact-fun-fact">
              <span role="img" aria-label="lightbulb">💡</span> {showFact}
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="footer-section connect-section">
          <h3 className="footer-title">Connect</h3>

          <div
            className="social-links"
            style={{
              display: "flex",
              gap: "1.2em",
              justifyContent: "center",
              overflowX: "auto"
            }}
          >
            {socials.map((social) => (
              <a
                key={social.label} // ✅ stable key
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.className} social-link social-animated`}
                title={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  width={32}
                  height={32}
                />
                <span
                  style={{
                    fontWeight: 600,
                    color: "#00f0ff",
                    marginLeft: 6
                  }}
                >
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
