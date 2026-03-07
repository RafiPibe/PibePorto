import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectPageProps {
  title: string;
  category: string;
  description: string;
  image: string;
  backLabel?: string;
  details?: string[];
}

export default function ProjectPageTemplate({
  title,
  category,
  description,
  image,
  backLabel = "Back to Home",
  details = [],
}: ProjectPageProps) {
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
            ← {backLabel}
          </Link>
        </motion.div>

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
                {category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display italic text-text-primary mb-4">
              {title}
            </h1>
            <p className="text-lg leading-relaxed">
              {description}
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-stroke bg-surface">
            <img
              src={image}
              alt={`${title} preview`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.header>

        {details.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-medium text-text-primary mb-6">
              Project <span className="font-display italic">Details</span>
            </h2>
            <ul className="space-y-3">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </div>
    </article>
  );
}
