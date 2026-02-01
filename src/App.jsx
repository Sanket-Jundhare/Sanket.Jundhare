// File: App.jsx

import React, { useEffect } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Certification from "./Pages/Certification";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Experience from "./Pages/Experience";
import BotAssistant from "./Pages/BotAssistant";
import News from "./Pages/News";
import Newspapers from "./Pages/Newspapers";

import myPhoto from "./assets/MY.png"; // <-- Add your image here

function App() {
  useEffect(() => {
    const revealSections = () => {
      document.querySelectorAll('.section-animated').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          section.classList.add('visible');
        }
      });
    };
    revealSections();
    window.addEventListener('scroll', revealSections);
    window.addEventListener('resize', revealSections);
    return () => {
      window.removeEventListener('scroll', revealSections);
      window.removeEventListener('resize', revealSections);
    };
  }, []);

  return (
    <div className="App">
      {/* 🔵 Animated background */}
      <div className="background-animated">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
        <div className="particle p5"></div>
      </div>

      {/* 🔷 Navigation & Assistant */}
      <Navbar />
      <BotAssistant />

      {/* 🔶 Optional Custom Logo/Image */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '1rem'
      }}>
        <img
          src={myPhoto}
          alt="Sanket Jundhare"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* 🔸 Sections */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="certification"><Certification /></section>
      <section id="projects"><Projects /></section>
      <section id="News"><News /></section>
      <section id="Newspapers"><Newspapers /></section>

      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}

export default App;
