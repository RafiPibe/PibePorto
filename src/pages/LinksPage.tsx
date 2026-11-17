import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./links.css";

export default function LinksPage() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("pibelinks_theme");
    return saved === "dark" ? "dark" : "light";
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Faraihan Rafi Adityawarman — Links";
    document.body.style.backgroundColor = theme === "dark" ? "#09090b" : "#f0ede6";

    // Set meta theme color
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    const prevThemeColor = metaTheme ? metaTheme.getAttribute("content") : null;

    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", theme === "dark" ? "#09090b" : "#f0ede6");

    return () => {
      document.title = prevTitle;
      document.body.style.backgroundColor = "";
      if (metaTheme && prevThemeColor) {
        metaTheme.setAttribute("content", prevThemeColor);
      }
    };
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("pibelinks_theme", nextTheme);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast("Link copied to clipboard"))
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast("Link copied to clipboard");
    } catch {
      showToast("Could not copy link");
    }
    document.body.removeChild(textArea);
  };

  const handleShare = async () => {
    const shareData = {
      title: "Faraihan Rafi Adityawarman",
      text: "Trying to be better everyday — Portfolio, links, and socials",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err: unknown) {
        if ((err as Error)?.name !== "AbortError") {
          copyToClipboard(window.location.href);
        }
      }
    } else {
      copyToClipboard(window.location.href);
    }
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="pibelinks-page" data-theme={theme}>
      {/* Ambient background glow */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Top Utilities Bar */}
      <header className="top-nav">
        <div
          className="status-pill"
          title="Currently open to select freelance and full-time opportunities"
        >
          <span className="status-dot" />
          <span className="status-text">Available for work</span>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={handleShare}
            aria-label="Share profile"
            title="Share profile"
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>

          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                className="nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                className="nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pibelinks-container">
        {/* Profile Header */}
        <section className="profile-header">
          <div className="avatar-wrapper">
            <img
              src="/IMG_1564.jpg"
              alt="Faraihan Rafi Adityawarman"
              className="avatar-img"
              width={104}
              height={104}
              loading="eager"
            />
          </div>

          <div className="profile-info">
            <h1 className="profile-name">Faraihan Rafi Adityawarman</h1>
            <blockquote className="profile-quote">
              “Trying to be better everyday”
            </blockquote>
          </div>

          {/* Quick Social Strip */}
          <nav className="social-strip" aria-label="Social media channels">
            <a
              href="https://instagram.com/pibegraph"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-btn strip-instagram"
              aria-label="Instagram"
            >
              <svg
                className="ui-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/faraihanrafia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-btn strip-linkedin"
              aria-label="LinkedIn"
            >
              <svg
                className="ui-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/RafiPibe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-btn strip-github"
              aria-label="GitHub"
            >
              <svg
                className="ui-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@farxygo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-strip-btn strip-youtube"
              aria-label="YouTube"
            >
              <svg
                className="ui-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
            <a
              href="mailto:faraihanrafia@gmail.com"
              className="social-strip-btn strip-email"
              aria-label="Email"
            >
              <svg
                className="ui-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </nav>
        </section>

        {/* Links Stack */}
        <section className="links-section" aria-label="Primary destinations">
          {/* 1. Portfolio (Creative) */}
          <Link
            to="/creative"
            className="link-card card-portfolio featured"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow" aria-hidden="true" />
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">Creative Portfolio</span>
                  <span className="badge featured-badge">Creative</span>
                </div>
                <span className="card-description">
                  Creative works such as Videos, Designs, etc.
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </Link>

          {/* 2. Photo */}
          <Link
            to="/photo"
            className="link-card card-photo featured"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow" aria-hidden="true" />
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">Photo</span>
                  <span className="badge featured-badge">Photos</span>
                </div>
                <span className="card-description">
                  Photography collection, street, and perspectives
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </Link>

          {/* 3. Portfolio (Tech) */}
          <Link
            to="/"
            className="link-card card-portfolio featured"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-glow" aria-hidden="true" />
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">Tech Portfolio</span>
                  <span className="badge featured-badge">Tech</span>
                </div>
                <span className="card-description">
                  Selected UI/UX designs, case studies, and engineering projects
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </Link>

          {/* 3. Instagram */}
          <a
            href="https://instagram.com/pibegraph"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card card-instagram"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">Instagram</span>
                </div>
                <span className="card-description">
                  Vlogs, Photography, and more!
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>

          {/* 4. YouTube */}
          <a
            href="https://youtube.com/@farxygo"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card card-youtube"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">YouTube</span>
                </div>
                <span className="card-description">
                  Videography, Motion Graphics, and more
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>

          {/* 5. TikTok */}
          <a
            href="https://tiktok.com/@pibegraph"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card card-tiktok"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.33 6.33 0 0 0 6.33-6.32V8.9a8.28 8.28 0 0 0 4.84 1.56V7.02a4.83 4.83 0 0 1-.92-.33z" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">TikTok</span>
                </div>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>

          {/* 6. GitHub */}
          <a
            href="https://github.com/RafiPibe"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card card-github"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">GitHub</span>
                </div>
                <span className="card-description">
                  Code repositories, front-end experiments, and tools
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>

          {/* 7. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/faraihanrafia/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-card card-linkedin"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">LinkedIn</span>
                </div>
                <span className="card-description">
                  Professional background and experience
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>

          {/* 8. Email / Inquiries */}
          <a
            href="mailto:faraihanrafia@gmail.com"
            className="link-card card-email"
            onMouseMove={handleCardMouseMove}
          >
            <div className="card-inner">
              <div className="card-icon-box">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <span className="card-title">Direct Email</span>
                </div>
                <span className="card-description">
                  faraihanrafia@gmail.com
                </span>
              </div>
              <div className="card-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </a>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-divider" aria-hidden="true" />
          <p className="footer-text">
            <span>&copy; {currentYear} Faraihan Rafi Adityawarman</span>
            <span className="footer-dot">&bull;</span>
            <span className="footer-sub">All rights reserved</span>
          </p>
        </footer>
      </main>

      {/* Toast Notification */}
      <div
        className={`toast ${toastMessage ? "show" : ""}`}
        role="status"
        aria-live="polite"
      >
        <svg
          className="toast-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{toastMessage || "Link copied to clipboard"}</span>
      </div>
    </div>
  );
}
