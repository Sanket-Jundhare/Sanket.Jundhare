import React, { useState, useEffect } from "react";
import "./Web.css";

const messages = [
  "🚰 SYN-01 Online.",
  "📂 Loading Sanket's profile...",
  "💡 Tip: Type '/' for command deck.",
  "🔍 Try 'scan projects' or 'launch contact'."
];

const Assistant = () => {
  const [open, setOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`syn-assistant ${open ? "open" : ""}`}>
      <div
        className="syn-avatar"
        onClick={() => setOpen(!open)}
      >
        <div className="syn-face">🤖</div>
        <div className="syn-core"></div>
      </div>

      {open && (
        <div className="syn-panel">
          <p className="syn-message">
            {messages[messageIndex]}
          </p>
        </div>
      )}
    </div>
  );
};

export default Assistant;
