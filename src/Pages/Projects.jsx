import React, { useState, useEffect, useRef } from "react";
import "./Web.css";
import Outge from "../assets/Projects/Outge.png";
import AutismRobot from "../assets/Projects/Autism Robot.jpg";
import RFIDPass from "../assets/Projects/RFID Pass.png";
import MSRTC from "../assets/Projects/MSRTC.png";
import BusPassApp from "../assets/Projects/Bus Pass App.mp4";
import OnlineReporting from "../assets/Projects/Online Reporting.png";
import OnlineReportingSystem from "../assets/Projects/Online Reporting System.mp4";
import DiplomaRestaurantSystem from "../assets/Projects/Diploma Restaurant System.png";
import Agent from "../assets/Projects/Agetn.png";
import SIH from "../assets/certificates/SIH.png";
const projects = [
  {
    name: "ERP Automation",
    desc: "An Agent that automatic ERP attendance where normally minimum of 1 to 1:15 minutues need where my agent do it in just 10 to 20 seconds,reducing normal process by 80% to 85% .",
    tech: ["Python RAG ", "AI"],
    video: "https://youtu.be/zXgXPVA7u3A",
    thumbnail: Agent,
    category: "AI Agent for ERP automation",
    year: "2026",
    best: true
  },
  {
    name: "SIH : Hybrid Attendance Mangement System – Presentation",
    desc: "A presentation on Hybrid Attendance mangement system which work in both mode online and offline with database support also.",
    tech: ["Research", "Public Speaking", "Smart India Hackathon","Networking","WIFI"],
    video: "https://youtu.be/X5TVWKR8LDk?si=tvzKBktDzaSsZ0NZ",
    thumbnail: SIH,
    category: "Presentations & Talks",
    year: "2025"
  },
  {
    name: "Outage Management System",
    desc: "An enterprise-grade solution for real-time outage detection, reporting, and analytics. Empowers utility companies to respond faster and keep customers informed. Includes a predictive outage alert system powered by machine learning, and a real-time interactive outage map for users and administrators.",
    tech: ["Frontend: ReactJS", "Backend: Node.js", "Database: MongoDB"],
    video: "https://youtu.be/xpngmh7GimU",
    thumbnail: Outge,
    category: "Enterprise Solutions",
    year: "2025",
    best: true
  },
  {
    name: "Autism Support Robot",
    desc: "A compassionate robot designed to assist and engage children with autism. Features interactive activities, emotion recognition, and a friendly design to foster learning and comfort.",
    tech: ["Robotics", "AI", "Assistive Tech"],
    img: AutismRobot,
    category: "Robotics & AI",
    year: "2025",
    status: "Under Development"
  },
  {
    name: "RFID Smart Pass System",
    desc: "A seamless, contactless entry solution using RFID technology. This project automates access control and attendance, making daily routines smarter and more secure.",
    tech: ["RFID", "Embedded Systems", "Automation"],
    img: RFIDPass,
    category: "IoT & Security",
    year: "2024",
    
  },
  {
    name: "Bus Pass App – Digital Commuter Experience",
    desc: "A mobile app that revolutionizes public transport with digital ticketing, real-time bus tracking, and a user-friendly interface for daily commuters.",
    tech: ["Android", "Mobile App", "Real-Time Tracking", "UI/UX"],
    video: BusPassApp,
    thumbnail: MSRTC,
    category: "Mobile Development",
    year: "2024",
    status: "Research Oriented"
  },
  {
    name: "Online Reporting System",
    desc: "A robust web platform for submitting, tracking, and managing reports online. Streamlines workflows for organizations and ensures transparency and accountability.",
    tech: ["Frontend: HTML, CSS"],
    video: OnlineReportingSystem,
    thumbnail: OnlineReporting,
    category: "Web Solutions",
    year: "2024"
  },
  {
    name: "Diploma Restaurant System",
    desc: "A digital restaurant management platform for seamless order processing, billing, and kitchen coordination. Enhances efficiency and customer satisfaction in food service.",
    tech: ["Python-based Desktop Application"],
    img: DiplomaRestaurantSystem,
    category: "Business Automation",
    year: "2023"
  },
  // IoT Capstone Activity 1
  {
    name: "IoT Capstone: Buzzer & Potentiometer Melody Demo",
    desc: "Demonstration of generating melodies using a buzzer and potentiometer. Showcases analog input control to play different musical notes and tunes on hardware.",
    tech: ["IoT", "Buzzer", "Potentiometer", "Embedded"],
    video: "https://youtube.com/shorts/C20gi191lek?feature=shared",
    thumbnail: "https://img.youtube.com/vi/C20gi191lek/hqdefault.jpg",
    category: "IoT Projects",
    year: "2024"
  },
  // IoT Capstone Activity 2
  {
    name: "IoT Capstone: IR & Photovoltaic Sensor Testing",
    desc: "Testing and demonstration of IR and photovoltaic sensors for real-time detection and automation. Highlights sensor accuracy and integration in IoT systems.",
    tech: ["IoT", "IR Sensor", "Photovoltaic Sensor", "Testing"],
    video: "https://youtube.com/shorts/uH7fOWqhWSA?feature=shared",
    thumbnail: "https://img.youtube.com/vi/uH7fOWqhWSA/hqdefault.jpg",
    category: "IoT Projects",
    year: "2024"
  },
  // IoT Capstone Activity 3
  {
    name: "IoT Capstone: IR-based Security System",
    desc: "A security system using IR sensor, buzzer, and microcontroller. When an object is removed from the IR sensor, a servo motor closes the door and the buzzer beeps for alerting.",
    tech: ["IoT", "IR Sensor", "Buzzer", "Servo Motor", "Microcontroller", "Security"],
    video: "https://youtu.be/yX7YHDLOAZo",
    thumbnail: "https://img.youtube.com/vi/7Umd6zTcaCg/hqdefault.jpg",
    category: "IoT Projects",
    year: "2024"
  },
  // SDG 11 Presentation
  {
    name: "SDG 11: Sustainable Cities & Communities – Presentation",
    desc: "A presentation on Sustainable Development Goal 11, focusing on smart city solutions, urban innovation, and sustainable community development.",
    tech: ["Research", "Public Speaking", "Smart Cities"],
    video: "https://youtu.be/gAbNfuXWY7M?feature=shared",
    thumbnail: "https://img.youtube.com/vi/gAbNfuXWY7M/hqdefault.jpg",
    category: "Presentations & Talks",
    year: "2024"
  },
 
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    if (modalProject || modalVideo) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalProject, modalVideo]);

  const handleProjectClick = (project) => {
    if (project.video) {
      setModalVideo(project);
    } else if (project.img) {
      setModalProject(project);
    }
  };

  const closeModal = (e) => {
    if (
      e.target.className === 'photo-modal-overlay' ||
      e.target.className === 'modal-close-btn' ||
      e.target.className === 'video-modal-overlay' ||
      e.target.className === 'video-modal-close-btn'
    ) {
      setModalProject(null);
      setModalVideo(null);
    }
  };

  return (
    <div className="section projects-section section-animated">
      <h2 className="animated-heading">Featured Projects</h2>
      <p className="projects-subtitle">Explore my latest work in mobile development, IoT, and automation</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`project-card ${project.featured ? 'featured' : ''} ${hoveredProject === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(project)}
            style={{ cursor: project.img || project.video ? 'pointer' : 'default' }}
          >
            <div className="project-card-header">
              <div className="project-image-container">
                {project.img && !project.video && (
                  <img src={project.img} alt={project.name} className="project-image" />
                )}
                {project.video && project.thumbnail && (
                  <div className="project-video-thumb">
                    <img src={project.thumbnail} alt={project.name + ' preview'} className="project-video-thumb-img" style={{ objectFit: 'cover' }} onError={e => { e.target.onerror = null; e.target.src = '/assets/video-placeholder.png'; }} />
                    <div className="project-video-overlay">
                      <span className="project-play-icon">▶</span>
                    </div>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <span className="project-view-btn">{project.video ? 'Play Video' : 'View Project'}</span>
                  </div>
                </div>
              </div>
              {project.status && (
                <div className="project-status-badge">
                  <span className="status-text">{project.status}</span>
                </div>
              )}
              {project.featured && (
                <div className="project-badge">
                  <span className="badge-icon">⭐</span>
                  <span className="badge-text">Featured</span>
                </div>
              )}
              {project.best && (
                <div className="project-best-badge">
                  <span className="best-icon">🏆</span>
                  <span className="best-text">Best Project</span>
                </div>
              )}
            </div>
            
            <div className="project-card-content">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
              
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.desc}</p>
              
              <div className="project-tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {project.link && (
                <div className="project-actions">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link-btn"
                  >
                    <span className="btn-text">View Demo</span>
                    <span className="btn-icon">→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {modalProject && (
        <div className="photo-modal-overlay" onClick={closeModal} ref={modalRef}>
          <div className="photo-modal">
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <img src={modalProject.img} alt={modalProject.name} className="modal-photo" />
            <div className="modal-info">
              <h3>{modalProject.name}</h3>
              <p>{modalProject.desc}</p>
              <div className="modal-details">
                <div className="detail-item"><span className="detail-icon">🛠️</span> <span>{modalProject.tech.join(', ')}</span></div>
                <div className="detail-item"><span className="detail-icon">🏷️</span> <span>{modalProject.category}</span></div>
                <div className="detail-item"><span className="detail-icon">📅</span> <span>{modalProject.year}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalVideo && (
        <div className="video-modal-overlay" onClick={closeModal} ref={modalRef}>
          <div className="video-modal">
            <button className="video-modal-close-btn" onClick={closeModal}>&times;</button>
            {modalVideo.video.includes('youtube.com') || modalVideo.video.includes('youtu.be') ? (
              <iframe
                src={
                  modalVideo.video.includes('shorts/')
                    ? `https://www.youtube.com/embed/${modalVideo.video.split('/').pop().split('?')[0]}?autoplay=1&mute=1&controls=1`
                    : modalVideo.video.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&controls=1'
                }
                title={modalVideo.name}
                className="video-modal-player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            ) : (
              <video src={modalVideo.video} controls autoPlay muted className="video-modal-player" />
            )}
            <div className="modal-info">
              <h3>{modalVideo.name}</h3>
              <p>{modalVideo.desc}</p>
              <div className="modal-details">
                <div className="detail-item"><span className="detail-icon">🛠️</span> <span>{modalVideo.tech.join(', ')}</span></div>
                <div className="detail-item"><span className="detail-icon">🏷️</span> <span>{modalVideo.category}</span></div>
                <div className="detail-item"><span className="detail-icon">📅</span> <span>{modalVideo.year}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 