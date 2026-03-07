import { motion } from "framer-motion";

const stats = [
  {
    number: "6+",
    label: "Projects Done",
    sublabel: "Across UI/UX design and development.",
  },
  {
    number: "3+",
    label: "Years Experience",
    sublabel: "In design and frontend development.",
  },
  {
    number: "100%",
    label: "Passionate",
    sublabel: "About creating beautiful interfaces.",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24">
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
              Stats & Facts
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-3">
            Making an <span className="font-display italic">impact</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-lg">
            A few numbers that reflect my journey in design and development,
            building meaningful digital experiences along the way.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-text-primary mb-4">
                {stat.number}
              </div>
              <div className="h-px bg-stroke mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-muted">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
