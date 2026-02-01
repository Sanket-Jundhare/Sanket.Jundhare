import React, { useState } from "react";
import "./Web.css";

import DataScienceHP from "../assets/certificates/Data Science and Analytics by HP.png";
import DipexProject from "../assets/certificates/Dipex Project CompitentionRound 1.png";
import IITBootcamp from "../assets/certificates/Enterpreneurship Bootcamp by IIT Bombay.png";
import EDA1 from "../assets/certificates/Exploratory Data Analysis Level 1 by Accenture.png";
import EDA2 from "../assets/certificates/Exploratory Data Analysis Level 2 by Accenture.png";
import GenAI from "../assets/certificates/Genrative Ai By Microsoft and Linkedin.png";
import HTMLTraining from "../assets/certificates/HTML Traning By LinkedIn.png";
import IntroAI from "../assets/certificates/Introduction to AI.png";
import JavaFundamentals from "../assets/certificates/Java Fundaments by Oracle.png";

import HCLCert from "../assets/certificates/HCL.png";
import SIHCert from "../assets/certificates/SIH.png";
import LLMCert from "../assets/certificates/LLM.png";

const certificates = [
  { src: DataScienceHP, title: "Data Science and Analytics by HP" },
  { src: DipexProject, title: "Dipex Project Competition Round 1" },
  { src: IITBootcamp, title: "Entrepreneurship Bootcamp by IIT Bombay" },
  { src: EDA1, title: "Exploratory Data Analysis Level 1 by Accenture" },
  { src: EDA2, title: "Exploratory Data Analysis Level 2 by Accenture" },
  { src: GenAI, title: "Generative AI by Microsoft & LinkedIn" },
  { src: HTMLTraining, title: "HTML Training by LinkedIn" },
  { src: IntroAI, title: "Introduction to AI" },
  { src: JavaFundamentals, title: "Java Fundamentals by Oracle" },
  { src: HCLCert, title: "HCL Certificate" },
  { src: SIHCert, title: "SIH Certificate" },
  { src: LLMCert, title: "LLM Certificate" }
];

const Certification = () => {
  const [modalItem, setModalItem] = useState(null);

  return (
    <div className="section certification-section section-animated">
      <h2 className="animated-heading">Certifications</h2>

      <div className="certification-list">
        {certificates.map((item) => (
          <div
            key={item.title}
            className="polaroid-certificate"
            style={{ cursor: "pointer" }}
            onClick={() => setModalItem(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="polaroid-img"
            />
            <div className="polaroid-title">{item.title}</div>
          </div>
        ))}
      </div>

      {modalItem && (
        <div className="cert-modal" onClick={() => setModalItem(null)}>
          <img
            src={modalItem.src}
            alt={modalItem.title}
            className="cert-modal-img"
          />
        </div>
      )}
    </div>
  );
};

export default Certification;
