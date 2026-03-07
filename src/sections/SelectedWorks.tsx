import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "kenangan",
    title: "Kenangan.com",
    description:
      "The first Gift Registry application in Indonesia that makes your special moments more special.",
    image: "/projects/Kenangan.svg",
    gradient:
      "from-indigo-500 via-purple-400/60 via-indigo-500/60 to-transparent",
  },
  {
    slug: "docs-repo",
    title: "Document Repository",
    description:
      "A document repository web app focused on streamlining work and projects in company.",
    image: "/projects/DocsRepo.svg",
    gradient: "from-violet-500 via-indigo-400/60 to-transparent",
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function SelectedWorks() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Works
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-3">
                Featured{" "}
                <span className="font-display italic">works</span>
              </h2>
              <p className="text-sm md:text-base text-muted max-w-md">
                A selection of real-world projects I've designed and developed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={cardVariant}>
              <Link
                to={`/work/${project.slug}`}
                className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer block"
                style={{ aspectRatio: "4/3" }}
              >
                {/* Background image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-3 p-6">
                  {/* Hover label pill */}
                  <div className="relative">
                    <div className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift" />
                    <div className="relative bg-white rounded-full px-6 py-3 text-bg text-sm font-medium">
                      View —{" "}
                      <span className="font-display italic">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted text-center max-w-xs">
                    {project.description}
                  </p>
                </div>

                {/* Bottom gradient label */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${project.gradient} opacity-60`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
