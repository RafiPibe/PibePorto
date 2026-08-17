import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const webseriesThumbnail = "/thumbnails/webseriesThumbnail.png";
const projectThumbnail = "/thumbnails/ProjectThumbnail.jpg";

// Load all images in the photograph directory from public
const photoModules = import.meta.glob('/public/photograph/*.{svg,SVG,png,PNG,jpg,JPG,jpeg,JPEG}');
const photographs = Object.keys(photoModules).map(path => path.replace('/public', ''));

// Load logos
const logoModules = import.meta.glob('/public/logo/*.{svg,SVG,png,PNG,jpg,JPG,jpeg,JPEG}');
const logos = Object.keys(logoModules).map(path => path.replace('/public', ''));

// Load graphic designs
const designModules = import.meta.glob('/public/graphics/*.{svg,SVG,png,PNG,jpg,JPG,jpeg,JPEG}');
const graphicDesigns = Object.keys(designModules).map(path => path.replace('/public', ''));

export default function PhotographyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null);

  // Set cream theme for document body just while this component is mounted to prevent global style leak
  // though we will use standard tailwind for the container styling anyway
  useEffect(() => {
    document.body.style.backgroundColor = "#FAF9F6";
    return () => {
      document.body.style.backgroundColor = ""; // Reset on unmount
    };
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowLeft') {
        setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
      } else if (e.key === 'ArrowRight') {
        setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] font-body selection:bg-[#E0DDD5]">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            {/* Frosted Backdrop */}
            <div className="absolute inset-0 bg-[#2C2C2C]/80 backdrop-blur-md" />

            {/* Close Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[120]"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Main Image */}
            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={lightbox.images[lightbox.index]}
              alt="Preview"
              className="relative max-w-[90vw] max-h-[90vh] object-contain select-none shadow-2xl z-[105] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Left Button */}
            <button 
              className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-all backdrop-blur-sm z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
              }}
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            {/* Right Button */}
            <button 
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-all backdrop-blur-sm z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
              }}
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md px-6 py-6 md:py-8 md:px-12 flex justify-between items-center border-b border-[#2C2C2C]/10">
        <Link 
          to="/"
          className="group flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Main
        </Link>
        <div className="relative">
          {/* Burger Box */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-md border border-[#2C2C2C]/20 flex flex-col items-center justify-center gap-1.5 hover:bg-[#2C2C2C]/5 transition-colors z-[60] relative"
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-[#2C2C2C] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-px bg-[#2C2C2C] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-[#2C2C2C] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>

          {/* Side Panel Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed inset-0 bg-[#2C2C2C]/20 backdrop-blur-sm z-[45]"
                />
                
                {/* Panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 h-screen w-64 md:w-80 bg-[#FAF9F6] border-l border-[#2C2C2C]/10 shadow-2xl z-[55] flex flex-col pt-32 px-8 md:px-12"
                >
                  <div className="flex flex-col gap-6">
                    {['Videos', 'Logos', 'Graphic Designs', 'Photographs'].map((item) => (
                      <motion.button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                        className="text-left text-2xl md:text-3xl font-display italic text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors relative group w-max"
                        whileHover={{ x: 10 }}
                      >
                        {item}
                        <span className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#2C2C2C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="mt-auto pb-12">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#2C2C2C]/40 mb-4">
                      Connect
                    </p>
                    <div className="flex gap-4 text-[#2C2C2C]/60">
                      <a href="https://www.youtube.com/@Farxygo" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors">YT</a>
                      <a href="https://www.instagram.com/rafi_pibe/?hl=en" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors">IG</a>
                      <a href="https://www.tiktok.com/@pibegraph" target="_blank" rel="noreferrer" className="hover:text-[#2C2C2C] transition-colors">TK</a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
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
      <section id="videos" className="px-6 md:px-12 max-w-5xl mx-auto mb-32 pt-10">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-display italic">Videos</h2>
          <div className="h-px bg-[#2C2C2C]/10 flex-grow" />
        </div>
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
                <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-[1.3] transition-transform duration-300">
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
                <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-[1.3] transition-transform duration-300">
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

          {/* Video 3: Motion Graphic 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group block overflow-hidden rounded-md"
          >
            <a href="https://www.youtube.com/watch?v=RJvazXPXvkY" target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-md aspect-video bg-[#2C2C2C]/5">
              <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-[1.3] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2C2C2C]"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <img 
                src="https://img.youtube.com/vi/RJvazXPXvkY/maxresdefault.jpg" 
                alt="Motion Graphic 1" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
            </a>
            <div className="mt-6 text-center px-4">
              <h3 className="text-xl font-display italic leading-tight uppercase">Motion Graphic 1</h3>
              <p className="text-sm text-[#2C2C2C]/60 mt-2">Watch on YouTube</p>
            </div>
          </motion.div>

          {/* Video 4: Motion Graphic 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group block overflow-hidden rounded-md"
          >
            <a href="https://www.youtube.com/watch?v=Xp4fSGbDOdU" target="_blank" rel="noreferrer" className="block relative overflow-hidden rounded-md aspect-video bg-[#2C2C2C]/5">
              <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-[1.3] transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#2C2C2C]"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <img 
                src="https://img.youtube.com/vi/Xp4fSGbDOdU/maxresdefault.jpg" 
                alt="Motion Graphic 2" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
            </a>
            <div className="mt-6 text-center px-4">
              <h3 className="text-xl font-display italic leading-tight uppercase">Motion Graphic 2</h3>
              <p className="text-sm text-[#2C2C2C]/60 mt-2">Watch on YouTube</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      {logos.length > 0 && (
        <section id="logos" className="px-6 md:px-12 max-w-5xl mx-auto mb-32 pt-10">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-display italic">Logos</h2>
            <div className="h-px bg-[#2C2C2C]/10 flex-grow" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {logos.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="bg-white border border-[#2C2C2C]/10 rounded-xl overflow-hidden aspect-square flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                onClick={() => setLightbox({ images: logos, index })}
              >
                <img 
                  src={src} 
                  alt={`Logo ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Graphic Designs Section */}
      {graphicDesigns.length > 0 && (
        <section id="graphic-designs" className="px-4 md:px-8 max-w-7xl mx-auto mb-32 pt-10">
          <div className="flex items-center gap-4 mb-10 px-2 md:px-4">
            <h2 className="text-3xl font-display italic">Graphic Designs</h2>
            <div className="h-px bg-[#2C2C2C]/10 flex-grow" />
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {graphicDesigns.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="break-inside-avoid cursor-pointer"
                onClick={() => setLightbox({ images: graphicDesigns, index })}
              >
                <img 
                  src={src} 
                  alt={`Graphic Design ${index + 1}`} 
                  className="w-full h-auto object-cover rounded-xl border border-[#2C2C2C]/10 hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Gallery Grid (Photographs) */}
      <section id="photographs" className="px-4 md:px-8 pb-32 pt-10" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10 px-2 md:px-4">
            <h2 className="text-3xl font-display italic">Photographs</h2>
            <div className="h-px bg-[#2C2C2C]/10 flex-grow" />
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {photographs.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="break-inside-avoid cursor-pointer"
                onClick={() => setLightbox({ images: photographs, index })}
              >
                <img 
                  src={src} 
                  alt={`Photograph ${index + 1}`} 
                  className="w-full h-auto object-cover rounded-sm hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#2C2C2C]/10 text-center flex flex-col items-center justify-center bg-[#FAF9F6]">
        <p className="text-sm text-[#2C2C2C]/60 mb-4">
          All media and works by Faraihan Rafi Adityawarman.
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
