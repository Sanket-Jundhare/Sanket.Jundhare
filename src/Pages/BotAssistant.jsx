import React, { useState, useRef, useEffect } from "react";
import "./Web.css";

function randomGreeting() {
  const greetings = [
    "Hello! 👋 How can I help you today?",
    "Hey there! 😊 I’m Robot, your friendly portfolio bot.",
    "Namaste! 🙏 Ask me anything about Sanket.",
    "Hi! 🚀 Ready to explore Sanket’s journey?",
    "Welcome! 🤖 What would you like to know?"
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}
function randomBye() {
  const byes = [
    "Goodbye! 👋 Have a great day!",
    "See you soon! 😊 Take care!",
    "Bye! 🚀 Come back anytime!",
    "Take care! 🤖 Robo will be here if you need anything.",
    "See you! 🙏 Stay awesome!"
  ];
  return byes[Math.floor(Math.random() * byes.length)];
}
function randomThanks() {
  const thanks = [
    "Thank you! 😊 Robo is always here to help.",
    "Glad I could help! 🙏",
    "You’re welcome! 🚀",
    "Anytime! 🤖",
    "Appreciate it! Have a great day!"
  ];
  return thanks[Math.floor(Math.random() * thanks.length)];
}

const qa = [
  // Greetings
  { q: /hello|hi|hey|namaste|good (morning|afternoon|evening)/i, a: randomGreeting },
  // Goodbye/Farewell
  { q: /bye|goodbye|see you|take care/i, a: randomBye },
  // Thanks/Gratitude
  { q: /thank|thanks|appreciate|grateful/i, a: randomThanks },
  // Ask for which marks if only 'marks', 'grade', 'percentage', 'result', 'score' is present
  { q: /^(marks|grade|percentage|result|score)[\s\?\.!]*$/i, a: "Which marks would you like to know about? 10th, 12th, diploma, or current CGPA?" },
  // About
  { q: /who are you|your name|you/i, a: "I'm Robo, Sanket's portfolio bot! Ask me about Sanket's skills, projects, or contact info." },
  { q: /about sanket|who is sanket|tell me about sanket/i, a: "Sanket is a Frontend Developer, Researcher, and IoT Explorer passionate about bridging interfaces and intelligence." },
  // Skills
  { q: /skills?|technologies|tech stack|languages you know/i, a: "Sanket is skilled in ReactJS, JavaScript, IoT, Embedded Systems, Node.js, Java, Python, C/C++, Firebase, and more!" },
  { q: /favorite tech|favourite tech|best technology/i, a: "Sanket loves working with ReactJS and IoT devices!" },
  // 10th marks
  { q: /10th|ssc/i, a: "Sanket has scored 79.20% marks in 10th." },
  // 12th marks
  { q: /12th|hsc/i, a: "Sanket scored 55% in 12th—less than expected, but he was part of the COVID-19 batch. After his 10th board exams, lockdown happened, and when things reopened, he had to give his 12th HSC exams. That’s why the score is a bit low!" },
  // Diploma marks
  { q: /diploma/i, a: "Sanket passed his Diploma in Computer Engineering at Gautam Polytechnic Institute with 79.96%." },
  // B.Tech CGPA
  { q: /btech|b-tech|cgpa|current cgpa/i, a: "Sanket’s current CGPA in B.Tech (CSE) at Sanjivani University is 8.57." },
  // General education/marks (paragraph style)
  { q: /education|study|college|university|primary|1st|2nd|3rd|4th|5th/i, a: `Sanket’s education journey is quite interesting! He completed his 1st to 5th grade at Gautam Public School, then switched to Shri Chatrapati Shivaji Vidyalaya for 6th to 10th, scoring a great 79.20% in his 10th board exams. After that, he did his higher secondary (11th & 12th Science) at Shri Chatrapati Shivaji College, where he scored 55% in 12th—less than expected, but he was part of the COVID-19 batch, so after his 10th board exams, lockdown happened, and when things reopened, he had to give his 12th HSC exams. That’s why the score is a bit low! Then, he took up a Diploma in Computer Engineering at Gautam Polytechnic Institute, passing with 79.96%. Now, he’s in his 3rd year of B.Tech in CSE at Sanjivani University, with a current CGPA of 8.57. Quite a journey, right?` },
  // Experience
  { q: /experience|internship|work|jobs?/i, a: "Sanket interned at Thought Bliss Solutions (3 months), HCL Technologies (2 months, Web Developer), and Daigloues Media (3 months, UI/UX Designer & Web Developer)." },
  // Certifications
  { q: /certificates?|certifications?|courses?/i, a: "Sanket has certificates in Generative AI (Microsoft & LinkedIn), Entrepreneurship (IIT Bombay), and more. See the Certifications section for details!" },
  // Projects
  { q: /projects?|portfolio|apps?|demos?/i, a: "Check out the Projects section for MSRTC Bus App, RFID Bus Pass, IoT Sensor Grid, and more!" },
  // Tinkerers' Lab
  { q: /tinkerers|lab|club/i, a: "Sanket is a proud member of the Tinkerers' Lab at Sanjivani University!" },
  // Location
  { q: /where are you from|location|city|hometown/i, a: "Sanket is from Kolpewadi, Maharashtra, India." },
  // Hobbies
  { q: /hobbies|interests|what do you do for fun/i, a: "Sanket enjoys tinkering with electronics, coding, and exploring new tech!" },
  // Languages
  { q: /languages you speak|speak|language/i, a: "Sanket speaks English, Hindi, and Marathi." },
  // Contact
  { q: /contact|email|linkedin|how to reach/i, a: "You can contact Sanket at your.email@example.com or via LinkedIn (see Contact section)." },
  // Compliments
  { q: /good job|awesome|nice|great|smart|intelligent|cool/i, a: "Thank you! Babu is always learning to help you better." },
  // Fallback
  { q: /.*/, a: "Server is busy or check your prompt." }
];

export default function BotAssistant() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Robot, your friendly portfolio bot. Ask me anything about Sanket!" }
  ]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  // Show animated robot greeting on first load (fix double welcome)
  useEffect(() => {
    if (!sessionStorage.getItem("Robo-welcomed")) {
      setShowGreeting(true);
      setTimeout(() => {
        setShowGreeting(false);
        setOpen(true);
        sessionStorage.setItem("Robo-welcomed", "1");
      }, 2000); // smoother, shorter duration
    }
  }, []);

  useEffect(() => {
    if (open && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open, typing]);

  // Typing effect for Babu's answers
  const typeBotMessage = (fullText) => {
    setTyping(true);
    let i = 0;
    let current = "";
    const type = () => {
      if (i < fullText.length) {
        current += fullText[i];
        setMessages(msgs => {
          const last = msgs[msgs.length - 1];
          if (last && last.from === "bot" && last.typing) {
            return [...msgs.slice(0, -1), { from: "bot", text: current, typing: true }];
          } else {
            return [...msgs, { from: "bot", text: current, typing: true }];
          }
        });
        i++;
        setTimeout(type, 16 + Math.random() * 30);
      } else {
        setMessages(msgs => {
          const last = msgs[msgs.length - 1];
          if (last && last.from === "bot" && last.typing) {
            return [...msgs.slice(0, -1), { from: "bot", text: fullText }];
          } else {
            return [...msgs, { from: "bot", text: fullText }];
          }
        });
        setTyping(false);
      }
    };
    type();
  };

  const handleSend = e => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput("");
    let answer = qa.find(pair => pair.q.test(input))?.a || qa[qa.length - 1].a;
    if (typeof answer === "function") answer = answer();
    typeBotMessage(answer);
  };

  return (
    <div className="bot-assistant">
      {showGreeting && (
        <div className="ROBO-greeting">
          <div className="ROBO-half-svg">
            <span className="OBO-robot-emoji" role="img" aria-label="robot">🤖</span>
          </div>
          <div className="ROBO-greeting-bubble">Hello and Welcome!<br/>How can I help you?</div>
        </div>
      )}
      <div className={`bot-avatar-float${open ? " open" : ""}`} onClick={() => setOpen(o => !o)}>
        <span className="ROBO-robot-emoji" role="img" aria-label="robot">🤖</span>
      </div>
      {open && (
        <div className="bot-chat-panel">
          <div className="bot-chat-header">Ask ROBO <button className="bot-close" onClick={() => setOpen(false)}>&times;</button></div>
          <div className="bot-chat-messages" ref={chatRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`bot-msg bot-msg-${msg.from}`}>
                {msg.from === "bot" && <span className="ROBO-robot-emoji" role="img" aria-label="robot">🤖</span>}
                <span>{msg.text}</span>
                {msg.typing && typing && <span className="bot-typing-cursor">|</span>}
              </div>
            ))}
          </div>
          <form className="bot-chat-input" onSubmit={handleSend} autoComplete="off">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask ROBO anything..."
              aria-label="Ask ROBO"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
} 