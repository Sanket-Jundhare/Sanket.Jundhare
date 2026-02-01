import React, { useState } from "react";
import "./Web.css";

/* IMPORT ALL DOWNLOADED NEWSPAPERS */
import Lokmat from "../assets/newspapers/lok.png";
import LokmatTimes from "../assets/newspapers/lokm.png";
import Prahaar from "../assets/newspapers/pra.png";
import Pudhari from "../assets/newspapers/pu.png";
import Sakal from "../assets/newspapers/sakal.png";
import Saromata from "../assets/newspapers/saro.png";
import university from "../assets/newspapers/fal.jpeg";
const newspaperData = [
    {
    title: "Lokmat Times – 6 Sanjivani Students Selected for Intl Internship",
    date: "Jan 04, 2026",
    source: "Lokmat Times",
    type: "image",
    src: LokmatTimes
  },
  {
    title: "Lokmantan – Sanjivani Students Selected for Taiwan Internship",
    date: "Jan 03, 2026",
    source: "Lokmantan",
    type: "image",
    src: Lokmat
  },
  
  {
    title: "Prahaar – Taiwan Internship Selection News",
    date: "Jan 03, 2026",
    source: "Prahaar",
    type: "image",
    src: Prahaar
  },
  {
    title: "Pudhari – Sanjivani Students Get Taiwan Internship",
    date: "Jan 03, 2026",
    source: "Pudhari",
    type: "image",
    src: Pudhari
  },
  {
    title: "Sakal – Fully Sponsored Taiwan Internship",
    date: "Jan 03, 2026",
    source: "Sakal",
    type: "image",
    src: Sakal
  },
  {
    title: "Saromata – International Internship Coverage",
    date: "Jan 03, 2026",
    source: "Saromata",
    type: "image",
    src: Saromata
  },
  {
    title: "Sanjivani University – My felicitated by hon'ble Amit Kolhe sir",
    date: "Dec 31, 2025",
    source: "Sanjivani University",
    type: "image",
    src: university
  },
];

const Newspapers = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="section newspaper-section section-animated">
      <h2 className="animated-heading">Newspaper Coverage</h2>
      <p className="section-subtitle">
        Media coverage of my selection for the International Internship – Taiwan 2026
      </p>

      {/* GRID */}
      <div className="newspaper-grid">
        {newspaperData.map((item) => (
          <div
            key={item.title}
            className="newspaper-card"
            onClick={() => setActiveItem(item)}
          >
            <div className="newspaper-preview">
              <img src={item.src} alt={item.title} />
            </div>

            <div className="newspaper-info">
              <h3 className="newspaper-title">{item.source}</h3>
              <p className="newspaper-headline">{item.title}</p>
              <span className="newspaper-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeItem && (
        <div
          className="photo-modal-overlay"
          onClick={() => setActiveItem(null)}
        >
          <div className="photo-modal newspaper-modal">
            <button
              className="modal-close-btn"
              onClick={() => setActiveItem(null)}
            >
              &times;
            </button>

            <img
              src={activeItem.src}
              alt={activeItem.title}
              className="modal-photo"
            />

            <div className="modal-info">
              <h3>{activeItem.title}</h3>
              <p>
                <strong>Source:</strong> {activeItem.source}
              </p>
              <p>
                <strong>Date:</strong> {activeItem.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newspapers;
