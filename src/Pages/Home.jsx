import React, { useEffect, useState, useRef } from "react";
import "./Web.css";
import BotAssistant from "./BotAssistant";
import myPhoto from "../assets/MY p.png";

const taglines = [
  "Researcher",
  "Software Developer",
  "Vibe Coder",
  "IOT Enthusiast",
  "React Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Creative Coder"
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 5) return "Good Night";
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

/* =========================
   PARTICLE PLAYGROUND (FIXED)
   ========================= */
function ParticlePlayground() {
  const [particles, setParticles] = useState([]);
  const animationRef = useRef(null);
  const lastMoveTime = useRef(0);

  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const addParticle = (x, y, burst = false) => {
    setParticles(p => {
      const newParticles = [];
      const count = burst ? 12 : 1;

      for (let i = 0; i < count; i++) {
        const angle = burst ? (i / count) * 2 * Math.PI : 0;
        const speed = burst ? 2 + Math.random() * 2 : 1 + Math.random();

        newParticles.push({
          x,
          y,
          vx: burst ? Math.cos(angle) * speed : (Math.random() - 0.5) * 1.5,
          vy: burst ? Math.sin(angle) * speed : (Math.random() - 0.5) * 1.5,
          alpha: 1,
          color: `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`,
          size: burst ? 7 + Math.random() * 4 : 4 + Math.random() * 2
        });
      }

      return [...p, ...newParticles].slice(-100);
    });
  };

  useEffect(() => {
    const animate = () => {
      setParticles(particles =>
        particles
          .map(pt => ({
            ...pt,
            x: pt.x + pt.vx,
            y: pt.y + pt.vy,
            vy: pt.vy + 0.05,
            alpha: pt.alpha - 0.012
          }))
          .filter(
            pt =>
              pt.alpha > 0.05 &&
              pt.x > 0 &&
              pt.y > 0 &&
              pt.x < viewport.width &&
              pt.y < viewport.height
          )
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [viewport]);

  useEffect(() => {
    const handleMove = e => {
      const now = Date.now();
      if (now - lastMoveTime.current > 30) {
        addParticle(e.clientX, e.clientY);
        lastMoveTime.current = now;
      }
    };

    const handleClick = e => addParticle(e.clientX, e.clientY, true);
    const handleResize = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="particle-playground-overlay"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none"
      }}
    >
      {/* 🔥 SVG FIX — NO LAYOUT SPACE */}
      <svg
        width={viewport.width}
        height={viewport.height}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "block"
        }}
      >
        {particles.map((pt, i) => (
          <circle
            key={`particle-${i}`}
            cx={pt.x}
            cy={pt.y}
            r={pt.size}
            fill={pt.color}
            fillOpacity={pt.alpha}
          />
        ))}
      </svg>
    </div>
  );
}

/* =========================
   HOME COMPONENT
   ========================= */
const Home = () => {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [greeting, setGreeting] = useState(getGreeting());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeout;
    const current = taglines[taglineIdx];

    if (typing) {
      if (displayedText.length < current.length) {
        timeout = setTimeout(
          () => setDisplayedText(current.slice(0, displayedText.length + 1)),
          60
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(
          () => setDisplayedText(current.slice(0, displayedText.length - 1)),
          30
        );
      } else {
        setTyping(true);
        setTaglineIdx(i => (i + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, taglineIdx]);

  useEffect(() => {
    const handleMouseMove = e =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <ParticlePlayground />

      <div className="hero home-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-greeting">
              {greeting}, I'm 👋
            </h2>

            <h1 className="hero-name">Sanket Jundhare</h1>

            <div className="hero-role">
              <span>{displayedText}</span>
              <span className="role-cursor">|</span>
            </div>

            <p className="hero-description">
              I’m a passionate developer blending code, creativity, and curiosity
              to build smart solutions for the real world.
            </p>

            <div className="hero-buttons">
              {/* ✅ FIXED DOWNLOAD LINK */}
              <a
                className="resume-button primary"
                href="/Sanket.Jundhare/Sanket_Jundhare_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                📄 Download Resume
              </a>

              <a
                className="resume-button secondary"
                href="#contact"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                💬 Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={myPhoto} alt="Sanket Jundhare" className="hero-photo" />
          </div>
        </div>

        <div
          className="mouse-trail"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: isHovering ? 1 : 0
          }}
        />
      </div>

      <BotAssistant />
    </>
  );
};

export default Home;
