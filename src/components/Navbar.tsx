import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = ["Home", "Work", "Projects", "Contact"];

const sectionMap: Record<string, string> = {
  Home: "hero",
  Work: "works",
  Projects: "journal",
  Contact: "contact",
};

// Map route prefixes to nav link names
function getActiveLinkFromPath(pathname: string): string | null {
  if (pathname.startsWith("/work/")) return "Work";
  if (pathname.startsWith("/project/")) return "Projects";
  return null; // on homepage, use scroll-based detection
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection: route-based for detail pages, scroll-based for homepage
  useEffect(() => {
    const routeActive = getActiveLinkFromPath(location.pathname);

    if (routeActive) {
      // On a detail page — set active from route
      setActiveSection(routeActive);
      return;
    }

    // On homepage — observe sections to detect which is visible
    const sectionIds = Object.values(sectionMap);
    const idToLink = Object.fromEntries(
      Object.entries(sectionMap).map(([link, id]) => [id, link])
    );

    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best) {
          const link = idToLink[best.target.id];
          if (link) setActiveSection(link);
        }
      },
      { threshold: [0.2, 0.5], rootMargin: "-80px 0px -40% 0px" }
    );

    observerRef.current = observer;

    // Small delay to let the DOM render after navigation
    const timeout = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 200);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  const scrollToSection = (link: string) => {
    const sectionId = sectionMap[link] || "hero";

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <motion.div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Logo */}
        <button
          className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 flex-shrink-0"
          onMouseEnter={() => setHoveredLogo(true)}
          onMouseLeave={() => setHoveredLogo(false)}
          onClick={() => scrollToSection("Home")}
        >
          <div
            className={`absolute inset-0 rounded-full ${
              hoveredLogo ? "accent-gradient-reverse" : "accent-gradient"
            }`}
          />
          <div className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">
              PB
            </span>
          </div>
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Nav Links */}
        <div className="hidden sm:flex items-center">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                activeSection === link
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* Say hi button */}
        <button
          className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary transition-all duration-300"
          onClick={() =>
            (window.location.href = "mailto:faraihanrafia@gmail.com")
          }
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-1 bg-surface rounded-full backdrop-blur-md px-3 py-1.5">
            Say hi <span className="text-xs">↗</span>
          </span>
        </button>
      </motion.div>
    </nav>
  );
}
