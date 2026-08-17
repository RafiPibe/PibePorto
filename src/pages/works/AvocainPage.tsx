import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AvocainPage() {
  return (
    <article className="min-h-screen bg-bg text-muted">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors duration-300 mb-12"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="grid gap-10 md:grid-cols-2 md:items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Work
              </span>
            </div>
            <div className="flex items-center gap-6 mb-4">
              <h1 className="text-4xl md:text-6xl font-display italic text-text-primary">
                Avocain
              </h1>
              <a
                href="https://www.avocain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 text-sm text-text-primary rounded-full transition-all duration-300 mt-2 md:mt-0"
              >
                <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 border border-stroke group-hover:border-transparent transition-colors">
                  Visit Website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              A front-end development and UX research project for Avocain. Focusing on user flow planning, wireframing, and delivering high-fidelity prototypes while providing clear impact reports to clients.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stroke bg-surface">
            <img
              src="/projects/Avocain.svg"
              alt="Avocain preview"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.header>

        {/* Project Snapshot */}
        <motion.section
          className="grid gap-12 md:grid-cols-[1fr_1.5fr] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-2xl font-medium text-text-primary mb-4">
              Project <span className="font-display italic">Snapshot</span>
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Timeline</span>
                <span className="text-text-primary">8 Months (Aug 2025 - Apr 2026)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Role</span>
                <span className="text-text-primary">UI/UX Designer & Front-End Developer</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Platform</span>
                <span className="text-text-primary">Web Application</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-text-primary mb-3">Challenge</h3>
              <p>
                Avocain required extensive user flow research and comprehensive design system implementation to improve user engagement. There was a need for seamless consolidation and deployment of designs to the front-end website.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-text-primary mb-3">Outcome</h3>
              <p>
                Successfully conducted UX research, mapped user flows, and developed everything from low-fidelity wireframes to high-fidelity prototypes, which were seamlessly integrated into the front-end. Client engagement improved notably, as showcased through detailed impact reports.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Details */}
        <motion.section
          className="grid gap-12 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-xl font-medium text-text-primary mb-4">Responsibilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Conducted UX research and planned detailed user flows.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Developed wireframing, low-fidelity, and high-fidelity prototypes.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Consolidated and implemented designs to the front-end of the website.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text-primary mb-4">Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Provided detailed reports to clients showcasing the impact and effectiveness of design initiatives.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Bridged the gap between design and development by handling both UI/UX and Front-End tasks.
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </article>
  );
}
