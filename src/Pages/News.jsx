import React from "react";
import "./Web.css";

const newsData = [
  {
    title: "Selected for International Internship – Taiwan 2026 🇹🇼",
    date: "April 2026",
    description:
      "Selected for a prestigious International Internship Program in Taiwan 2026. The program focuses on advanced research, innovation, and global industry exposure.",
    tag: "International",
    media: {
      newspapers: [
        {
          label: "Local Newspaper Coverage",
          url: "https://images.epaperlokmat.in/eNewspaper/News/LOKTIME/AULT/2026/01/04/ArticleImages/695997b750448.jpg",
          
        },
        {
          label: "Regional Tech News",
          url: "https://maharashtramajanews.blogspot.com/2026/01/blog-post_62.html?m=1"
        }
      ],
      youtube: [
        {
          label: "Internship News Video",
          url: "https://youtu.be/gII1UWlkEkc?si=9vl5oNnz3R1zdlNv"
        }
      ],
      instagram: [
        {
          label: "Internship Reel",
          url: "https://www.instagram.com/reel/DTCyebgkv5u/?igsh=N3dnbXJqaG91MWh1"
        }
      ],
      websites: [
        {
          label: "Official Program Website",
          url: "https://coe.ccu.edu.tw/p/406-1021-80146,r40.php?Lang=en"
        }
      ]
    }
  },
  {
    title: "Built ERP Automation Agent",
    date: "February 2026",
    description:
      "Developed an AI-powered ERP Automation Agent that reduced task execution time from 1:15 minutes to just 15–20 seconds.",
    tag: "Project"
  },
  {
    title: "Selected for SIH 2025 (Smart India Hackathon)",
    date: "March 2025",
    description:
      "Our team was shortlisted for Smart India Hackathon 2025 with an Offline Attendance Management System that works in hybrid mode.",
    tag: "Achievement"
  },
  
  {
    title: "Presented SDG 11 – Sustainable Cities",
    date: "October 2024",
    description:
      "Delivered a presentation on Sustainable Development Goal 11, focusing on smart cities and sustainable urban innovation.",
    tag: "Presentation"
  }
];

const News = () => {
  return (
    <div className="section news-section section-animated">
      <h2 className="animated-heading">News & Updates</h2>
      <p className="section-subtitle">
        Latest achievements, media coverage, and important milestones
      </p>

      <div className="news-list">
        {newsData.map((item, index) => (
          <div key={index} className="news-card">
            <span className={`news-tag ${item.tag.toLowerCase()}`}>
              {item.tag}
            </span>

            <h3 className="news-title">{item.title}</h3>
            <span className="news-date">{item.date}</span>
            <p className="news-description">{item.description}</p>

            {/* 🔹 MEDIA LINKS (ONLY IF PRESENT) */}
            {item.media && (
              <div className="news-media">
                {item.media.newspapers && (
                  <div className="news-media-group">
                    <h4>📰 Newspaper</h4>
                    {item.media.newspapers.map((n, i) => (
                      <a key={i} href={n.url} target="_blank" rel="noreferrer">
                        {n.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.media.youtube && (
                  <div className="news-media-group">
                    <h4>🎥 YouTube</h4>
                    {item.media.youtube.map((y, i) => (
                      <a key={i} href={y.url} target="_blank" rel="noreferrer">
                        {y.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.media.instagram && (
                  <div className="news-media-group">
                    <h4>📸 Instagram</h4>
                    {item.media.instagram.map((ig, i) => (
                      <a key={i} href={ig.url} target="_blank" rel="noreferrer">
                        {ig.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.media.websites && (
                  <div className="news-media-group">
                    <h4>🌐 Website</h4>
                    {item.media.websites.map((w, i) => (
                      <a key={i} href={w.url} target="_blank" rel="noreferrer">
                        {w.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
