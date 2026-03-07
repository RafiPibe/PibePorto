import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function KenanganPage() {
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
              Kenangan.com
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              A first-of-its-kind gift registry experience in Indonesia crafted to
              make meaningful celebrations effortless for families and friends.
            </p>
            <a
              href="https://kenangan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 text-sm text-text-primary rounded-full transition-all duration-300"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 bg-surface rounded-full px-5 py-2.5 border border-stroke group-hover:border-transparent transition-colors">
                Visit Website
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stroke bg-surface">
            <img
              src="/projects/Kenangan.svg"
              alt="Kenangan.com hero screen"
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
                <span className="text-text-primary">12 Weeks</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Role</span>
                <span className="text-text-primary">UI/UX Designer</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted/60 uppercase tracking-wider text-xs w-20">Platform</span>
                <span className="text-text-primary">Mobile</span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-text-primary mb-3">Challenge</h3>
              <p>
                Kenangan.com have a slight problem in the UX of their platform. We're trying to change that to make a better and easier flows for the users, focusing on the gifting and moments aspect of the platform.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-text-primary mb-3">Outcome</h3>
              <p>
                New and revamped "Make it easy" flow for the users.
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
                Contributed in the revamp of the app "Make it easy"
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Created low-to-high fidelity wireframes and flows.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Collaborated with other UI/UX Designers to iterate on gifting and shopping flows.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text-primary mb-4">Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Better UX for users in general
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Focusing in the gifting aspect of the app
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                Gifting flow and UX
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </article>
  );
}
