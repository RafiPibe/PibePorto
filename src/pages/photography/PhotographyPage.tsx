import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import webseriesThumbnail from "../../thumbnails/webseriesThumbnail.png";
import projectThumbnail from "../../thumbnails/ProjectThumbnail.jpg";

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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-6 text-[#2C2C2C]/60"
        >
          <a href="https://www.youtube.com/@Farxygo" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors" title="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
          <a href="https://www.instagram.com/rafi_pibe/?hl=en" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors" title="Personal Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.instagram.com/pibegraph/?hl=en" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors" title="Photography Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com/@pibegraph" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors" title="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </a>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#2C2C2C]/60 mb-6"
        >
          Media by Pibe
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

      {/* Featured Videos Section */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Video 1: Webseries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group block overflow-hidden rounded-md"
          >
            <a href="https://www.youtube.com/watch?v=SOZp_exSqgw&list=PLprmAgZ2qyRDSKRS2RlmZGPKXi49h0hSR" target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-md aspect-video bg-[#2C2C2C]/5">
              <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2C2C2C]"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <img 
                src={webseriesThumbnail} 
                alt="Webseries Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
              />
            </a>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-display italic">Webseries</h3>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">Watch the full playlist on YouTube</p>
            </div>
          </motion.div>

          {/* Video 2: Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group block overflow-hidden rounded-md"
          >
            <a href="https://www.youtube.com/watch?v=n2YSpFqP-VU&t=107s" target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-md aspect-video bg-[#2C2C2C]/5">
              <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2C2C2C]"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <img 
                src={projectThumbnail} 
                alt="WHAT IF BLIND DEAF AND MUTE CHALLENGE WAS DRIVING?" 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
              />
            </a>
            <div className="mt-6 text-center px-4">
              <h3 className="text-xl font-display italic leading-tight uppercase">WHAT IF BLIND DEAF AND MUTE CHALLENGE WAS DRIVING?</h3>
              <p className="text-sm text-[#2C2C2C]/60 mt-2">Watch on YouTube</p>
            </div>
          </motion.div>
        </div>
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
