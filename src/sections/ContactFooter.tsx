import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Hls from "hls.js";

const socials = [
  { name: "GitHub", href: "https://github.com/RafiPibe" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/faraihanrafia/" },
  { name: "Art Porto", href: "https://faraihanrafia.carrd.co" },
];

export default function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // HLS Video
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

  // GSAP Marquee
  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeText = "DESIGNING THE FUTURE • ";

  return (
    <section
      id="contact"
      className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden"
    >
      {/* Background Video (flipped vertically) */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) scaleY(-1)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-24">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            style={{ width: "200%" }}
          >
            <span className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/10">
              {marqueeText.repeat(10)}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16 md:mb-24">
          <motion.p
            className="text-sm md:text-base text-muted max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you have a project in mind or just want to say
            hello!
          </motion.p>
          <motion.a
            href="mailto:faraihanrafia@gmail.com"
            className="group relative inline-flex items-center gap-2 text-text-primary rounded-full transition-all duration-300"
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 px-8 py-4 bg-bg border-2 border-stroke rounded-full group-hover:border-transparent transition-colors">
              faraihanrafia@gmail.com
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
          </motion.a>
        </div>

        {/* Footer Bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text-primary hover:-translate-y-0.5 transition-all duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Available indicator */}
            <div className="flex items-center gap-2">
              <div className="relative w-2 h-2">
                <span className="absolute inset-0 animate-ping bg-green-400 rounded-full opacity-75" />
                <span className="relative block w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <span className="text-sm text-muted">
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
