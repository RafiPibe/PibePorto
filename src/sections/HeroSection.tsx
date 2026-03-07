import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Hls from "hls.js";

const roles = ["UI/UX Designer", "Developer", "Creative"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS Video setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          PORTFOLIO '26
        </p>

        {/* Name */}
        <h1 className="name-reveal text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Faraihan Rafi Adityawarman
        </h1>

        {/* Role line */}
        <p className="blur-in text-base md:text-lg text-muted mb-4">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {roles[roleIndex]}
          </span>{" "}
          based in Indonesia.
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-8">
          Currently studying at University of Queensland. Passionate about
          creating clean, user-friendly, and good looking interfaces.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#works"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            View My Work
          </a>
          <button
            onClick={() =>
              window.open(
                "/CV_Faraihan Rafi Adityawarman.pdf",
                "CV",
                "width=800,height=900,scrollbars=yes,resizable=yes"
              )
            }
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            View My CV
          </button>
          <button
            onClick={() =>
              window.open(
                "/Portfolio_Faraihan Rafi Adityawarman.pdf",
                "Portfolio",
                "width=800,height=900,scrollbars=yes,resizable=yes"
              )
            }
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            View My Portfolio
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute inset-0 w-full h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
