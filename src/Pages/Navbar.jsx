import React, { useState, useEffect, useRef } from "react";
import "./Web.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certification", href: "#certification" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href:"#News"},
  { label: "Newspapers", href: "#Newspapers" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  const indicatorRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map(l => document.querySelector(l.href));
      const scrollPos = window.scrollY + 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!indicatorRef.current) return;

    const idx = navLinks.findIndex(l => l.href === active);
    const linkEl = linksRef.current[idx];

    if (linkEl) {
      const rect = linkEl.getBoundingClientRect();
      const parentRect =
        linkEl.parentElement.parentElement.getBoundingClientRect();

      indicatorRef.current.style.left = `${rect.left - parentRect.left}px`;
      indicatorRef.current.style.width = `${rect.width}px`;
    }
  }, [active, menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActive(href);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav
      className={`navbar-best glass-navbar${menuOpen ? " open" : ""}${scrolled ? " scrolled" : ""}`}
      aria-label="Main Navigation"
    >
      {/* Brand */}
      <div className="navbar-best-brand" tabIndex={0} aria-label="Sanket Home">
        <svg
          className="brand-icon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="12" stroke="#00f0ff" strokeWidth="2" fill="#001d2b" />
          <circle className="brand-pulse" cx="16" cy="16" r="6" fill="#00f0ff" />
        </svg>
        <span className="navbar-best-title gradient-text-animated">Sanket</span>
      </div>

      {/* Hamburger */}
      <button
        className={`navbar-best-hamburger${menuOpen ? " open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-best-links-wrapper"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Links */}
      <div
        className={`navbar-best-links-wrapper${menuOpen ? " open" : ""}`}
        id="navbar-best-links-wrapper"
      >
        <ul className="navbar-best-links" role="menubar">
          {navLinks.map((link, i) => (
            <li key={link.href} role="none" style={{ "--i": i }}>
              <a
                href={link.href}
                role="menuitem"
                tabIndex={0}
                ref={el => { if (el) linksRef.current[i] = el; }}
                className={active === link.href ? "active-nav-link" : ""}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                <span className="nav-link-ripple">{link.label}</span>
              </a>
            </li>
          ))}

          {/* ✅ indicator must be inside <li> */}
          <li role="none">
            <div className="navbar-best-indicator" ref={indicatorRef} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
