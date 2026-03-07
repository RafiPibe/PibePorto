import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const entries = [
  {
    title: "YayPlants!",
    slug: "yay-plants",
    image: "/projects/YayPlants.svg",
    description: "Mobile first web app for finding plants to photograph.",
    category: "Mobile Web App",
  },
  {
    title: "AccommodationX",
    slug: "accommodationx",
    image: "/projects/AccommodationX.svg",
    description: "Mobile app for finding accommodation with ease.",
    category: "Mobile App",
  },
  {
    title: "LingoLink",
    slug: "lingolink",
    image: "/projects/LingoLink.svg",
    description: "Connecting students with shared interests.",
    category: "Mobile App",
  },
  {
    title: "BCA Revamp",
    slug: "bca-revamp",
    image: "/projects/BCARevamp.svg",
    description: "A fresh take on the old mybca m-banking.",
    category: "UI Redesign",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
              Projects
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-3">
                Projects &{" "}
                <span className="font-display italic">study cases</span>
              </h2>
              <p className="text-sm md:text-base text-muted max-w-md">
                Exploring ideas through design challenges and personal projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Entries */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, i) => (
            <Link to={`/project/${entry.slug}`} key={i}>
              <motion.article
                className="group flex items-center gap-4 sm:gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full cursor-pointer transition-all duration-300"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {/* Circular image */}
                <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden flex-shrink-0 border-2 border-transparent group-hover:border-stroke transition-all duration-300 bg-surface">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-2xl font-medium text-text-primary transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 max-w-[200px] sm:max-w-none">
                  {entry.title}
                </h3>

                {/* Dotted separator (desktop) */}
                <div className="hidden md:block flex-grow h-px bg-stroke/30" />

                {/* Meta */}
                <div className="hidden sm:flex items-center gap-3 text-sm text-muted flex-shrink-0">
                  <span>{entry.category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted" />
                  <span className="max-w-[200px] truncate">{entry.description}</span>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-text-primary group-hover:text-bg group-hover:border-text-primary">
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
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
