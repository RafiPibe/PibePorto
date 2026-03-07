import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DocsRepoPage() {
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
            <h1 className="text-4xl md:text-6xl font-display italic text-text-primary mb-4">
              Document Repository
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              A centralized, searchable repository designed to keep cross-team documentation organised, discoverable, and secure.
            </p>
            <a
              href="https://github.com/RafiPibe"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 text-sm text-text-primary rounded-full transition-all duration-300"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 border border-stroke group-hover:border-transparent transition-colors">
                Visit GitHub
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stroke bg-surface">
            <img
              src="/projects/DocsRepo.svg"
              alt="Document Repository dashboard preview"
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
                <span className="text-text-primary">8 Weeks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Role</span>
                <span className="text-text-primary">UI/UX Designer</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Platform</span>
                <span className="text-text-primary">Desktop Web App</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-text-primary mb-3">Challenge</h3>
              <p>
                Distributed teams struggled to locate the latest documentation across multiple tools. We needed a single source of truth that kept documents up to date and permissions aligned with project needs without needing to search on scrambled places.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-text-primary mb-3">Outcome</h3>
              <p>
                Delivering a smart repository with easy access, kanban board, and role-based requests shortened search time and made knowledge handoff painless. Focusing on Board director and Employee for v1.0.
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
                Designed the barebones of v1.0 of the platform.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Created the UX of Master, Board Director, Editor, and Viewer (staff).
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Delivered 1.0 with the required features for repository.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text-primary mb-4">Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Designed project update using kanban based on role and projects
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Delivered the feature of Issue tracking for streamline workflows.
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </article>
  );
}
