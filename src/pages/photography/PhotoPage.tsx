import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import photosData from "../../data/photos.json";

interface Photo {
  id: string;
  title: string;
  thumb: string;
  full: string;
  width: number;
  height: number;
  aspectRatio: number;
}

const photos: Photo[] = photosData as Photo[];

function PhotoCard({
  photo,
  index,
  onSelect,
}: {
  photo: Photo;
  index: number;
  onSelect: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="break-inside-avoid mb-4 md:mb-8 cursor-pointer group"
      onClick={onSelect}
    >
      <div
        className="relative overflow-hidden rounded-md bg-[#ECE9E2] border border-[#2C2C2C]/10 transition-shadow duration-300 group-hover:shadow-xl"
        style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      >
        {/* Placeholder skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#E5E2DA] animate-pulse" />
        )}

        <img
          src={photo.thumb}
          alt={photo.title}
          width={photo.width}
          height={photo.height}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index < 2 ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
          }`}
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
          <span className="text-xs text-white/90 font-medium tracking-wider uppercase px-2.5 py-1 rounded bg-black/40 backdrop-blur-sm">
            View
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PhotoPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFullLoaded, setIsFullLoaded] = useState(false);

  // Set cream background
  useEffect(() => {
    document.body.style.backgroundColor = "#FAF9F6";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Preload adjacent full images when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % photos.length;
    const prevIdx = (lightboxIndex - 1 + photos.length) % photos.length;

    const imgNext = new Image();
    imgNext.src = photos[nextIdx].full;

    const imgPrev = new Image();
    imgPrev.src = photos[prevIdx].full;
  }, [lightboxIndex]);

  const handleNext = useCallback(() => {
    setIsFullLoaded(false);
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  }, []);

  const handlePrev = useCallback(() => {
    setIsFullLoaded(false);
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, []);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
    setIsFullLoaded(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev, handleClose]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] font-body selection:bg-[#E0DDD5]">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
            onClick={handleClose}
          >
            {/* Frosted Backdrop */}
            <div className="absolute inset-0 bg-[#1A1A1A]/90 backdrop-blur-md" />

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[120]"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-8 left-8 text-white/70 text-sm tracking-widest font-mono z-[120]">
              {lightboxIndex + 1} / {photos.length}
            </div>

            {/* Main Image with loading state */}
            <div
              className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center cursor-default z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              {!isFullLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}
              <motion.img
                key={photos[lightboxIndex].full}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: isFullLoaded ? 1 : 0.4, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                src={photos[lightboxIndex].full}
                alt={photos[lightboxIndex].title}
                decoding="async"
                onLoad={() => setIsFullLoaded(true)}
                className="max-w-[92vw] max-h-[88vh] object-contain select-none shadow-2xl rounded-sm"
              />
            </div>

            {/* Left Button */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-all backdrop-blur-sm z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Right Button */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-all backdrop-blur-sm z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md px-6 py-6 md:py-8 md:px-12 flex justify-between items-center border-b border-[#2C2C2C]/10">
        <div className="flex items-center gap-6">
          <Link
            to="/creative"
            className="group flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Creative
          </Link>
          <span className="text-[#2C2C2C]/20">/</span>
          <Link
            to="/"
            className="text-xs text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-4 text-[#2C2C2C]/60 text-sm">
          <a
            href="https://www.instagram.com/pibegraph/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#2C2C2C] transition-colors flex items-center gap-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="hidden sm:inline">@pibegraph</span>
          </a>
        </div>
      </header>

      {/* Page Title & Intro */}
      <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-16 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-[#2C2C2C]/60 mb-3"
        >
          Photography Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display italic leading-tight mb-4"
        >
          Moments &amp; Perspectives
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-[#2C2C2C]/65 max-w-xl mx-auto"
        >
          A collection of street, portraits, and candid compositions captured by Pibe.
        </motion.p>
      </section>

      {/* Gallery Masonry Grid */}
      <main className="px-4 md:px-8 pb-32 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8">
          {photos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              onSelect={() => {
                setIsFullLoaded(false);
                setLightboxIndex(index);
              }}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#2C2C2C]/10 text-center flex flex-col items-center justify-center bg-[#FAF9F6]">
        <p className="text-sm text-[#2C2C2C]/60 mb-4">
          All photographs captured by Faraihan Rafi Adityawarman.
        </p>
        <div className="flex gap-4">
          <Link
            to="/creative"
            className="text-sm font-medium tracking-wide underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            ← Back to Creative
          </Link>
          <span className="text-[#2C2C2C]/30">•</span>
          <Link
            to="/"
            className="text-sm font-medium tracking-wide underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
