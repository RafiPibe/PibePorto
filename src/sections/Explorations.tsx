import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const explorationItems = [
  {
    id: 1,
    title: "Kenangan.com",
    category: "Gift Registry App",
    image: "/projects/Kenangan.svg",
  },
  {
    id: 2,
    title: "Document Repository",
    category: "Web Application",
    image: "/projects/DocsRepo.svg",
  },
  {
    id: 3,
    title: "YayPlants!",
    category: "Mobile Web App",
    image: "/projects/YayPlants.svg",
  },
  {
    id: 4,
    title: "AccommodationX",
    category: "Mobile App",
    image: "/projects/AccommodationX.svg",
  },
  {
    id: 5,
    title: "LingoLink",
    category: "Mobile App",
    image: "/projects/LingoLink.svg",
  },
  {
    id: 6,
    title: "BCA Revamp",
    category: "UI Redesign",
    image: "/projects/BCARevamp.svg",
  },
];

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        ScrollTrigger.create({
          trigger: contentRef.current,
          start: "top top",
          endTrigger: sectionRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      }

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: "10vh" },
          {
            y: "-120vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { y: "40vh" },
          {
            y: "-100vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const leftItems = explorationItems.filter((_, i) => i % 2 === 0);
  const rightItems = explorationItems.filter((_, i) => i % 2 !== 0);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh]"
    >
      {/* Layer 1: Pinned Center Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-screen flex items-center justify-center"
      >
        <div className="text-center px-6 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              About Me
            </span>
            <div className="w-8 h-px bg-stroke" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-6">
            A bit about{" "}
            <span className="font-display italic">me</span>
          </h2>
          <div className="text-sm md:text-base text-muted space-y-4 text-left mb-8">
            <p>
              Hello! I'm Faraihan Rafi Adityawarman, people call me Pibe. I'm a
              passionate developer with a knack for creating clean,
              user-friendly, and good looking interfaces. My journey into the
              world of design started in the world of PowerPoint, and has since
              grown into a full-fledged passion for building things.
            </p>
            <p>
              I specialize in UI / UX Design and development, love to design
              beautiful and user-friendly websites and applications. I also do a
              little bit of Front-End Development with a strong focus on
              JavaScript frameworks like React and Vue. I love bringing ideas to
              life in the browser and am always eager to learn new things.
            </p>
            <p>
              When I'm not working on Figma or coding, you can find me doing
              photography, playing games, or watching tokusatsu.
            </p>
          </div>
          <a
            href="https://faraihanrafia.carrd.co"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 text-sm text-text-primary rounded-full transition-all duration-300"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 border border-stroke group-hover:border-transparent transition-colors">
              🎨 View Art Portfolio
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full px-6">
          <div className="grid grid-cols-2 gap-12 md:gap-40 h-full">
            {/* Left Column */}
            <div ref={leftColRef} className="flex flex-col items-end">
              <div className="h-[20vh]" />
              {leftItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-16 pointer-events-auto"
                  style={{
                    transform: `rotate(${(item.id % 2 === 0 ? 1 : -1) * (1.5 + (item.id % 3))}deg)`,
                  }}
                >
                  <div
                    className="group relative cursor-pointer aspect-square max-w-[320px] w-full"
                    onClick={() => setLightbox(item.image)}
                  >
                    <div className="absolute -inset-4 rounded-[40px] border border-stroke/30" />
                    <div className="relative rounded-3xl overflow-hidden w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Hover gradient + content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <div>
                          <p className="text-xs text-muted uppercase tracking-wider mb-1">
                            {item.category}
                          </p>
                          <h3 className="text-lg font-medium text-text-primary">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div ref={rightColRef} className="flex flex-col items-start">
              <div className="h-[40vh]" />
              {rightItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-16 pointer-events-auto"
                  style={{
                    transform: `rotate(${(item.id % 2 === 0 ? 1 : -1) * (1.5 + (item.id % 3))}deg)`,
                  }}
                >
                  <div
                    className="group relative cursor-pointer aspect-square max-w-[320px] w-full"
                    onClick={() => setLightbox(item.image)}
                  >
                    <div className="absolute -inset-4 rounded-[40px] border border-stroke/30" />
                    <div className="relative rounded-3xl overflow-hidden w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <div>
                          <p className="text-xs text-muted uppercase tracking-wider mb-1">
                            {item.category}
                          </p>
                          <h3 className="text-lg font-medium text-text-primary">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-pointer p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Project Preview"
              className="max-w-full max-h-full object-contain rounded-2xl"
              style={{ aspectRatio: "16/10" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
