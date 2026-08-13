import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Load all images in the photograph directory
const imageModules = import.meta.glob('../../photograph/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' });
const images = Object.values(imageModules) as string[];

export default function PhotographyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set cream theme for document body just while this component is mounted to prevent global style leak
  // though we will use standard tailwind for the container styling anyway
  useEffect(() => {
    document.body.style.backgroundColor = "#FAF9F6";
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] font-body selection:bg-[#E0DDD5]">
      {/* Header */}
      <header className="px-6 py-8 md:py-12 md:px-12 flex justify-between items-center border-b border-[#2C2C2C]/10">
        <Link 
          to="/"
          className="group flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Main
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2C2C2C] flex items-center justify-center text-[#FAF9F6] font-display italic text-xs">
            PB
          </div>
        </div>
      </header>

      {/* Hero / Title */}
      <section className="px-6 py-20 md:py-32 md:px-12 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#2C2C2C]/60 mb-6"
        >
          Photography by Pibe
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display italic leading-tight mb-8"
        >
          Capturing moments, light, and perspectives.
        </motion.h1>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 md:px-8 pb-32" ref={containerRef}>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Photograph ${index + 1}`} 
                className="w-full h-auto object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#2C2C2C]/10 text-center flex flex-col items-center justify-center">
        <p className="text-sm text-[#2C2C2C]/60 mb-4">
          All photographs taken by Faraihan Rafi Adityawarman.
        </p>
        <Link 
          to="/"
          className="text-sm font-medium tracking-wide underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          Return Home
        </Link>
      </footer>
    </div>
  );
}
