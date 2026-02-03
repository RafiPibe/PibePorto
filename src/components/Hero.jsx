import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center fade-in-section is-visible"
    >
      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          I'm Pibe, a UI / UX Developer & Designer based in Indonesia.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Currently studying at University of Queensland.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/#work"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            View My Work
          </Link>
          <button
            onClick={() =>
              window.open(
                "/src/assets/CV_Faraihan Rafi Adityawarman.pdf",
                "CV",
                "width=800,height=900,scrollbars=yes,resizable=yes",
              )
            }
            className="inline-block border border-indigo-400 text-indigo-400 font-semibold px-6 py-3 rounded-md hover:bg-indigo-400 hover:text-white transition-colors duration-300"
          >
            View My CV
          </button>
          <button
            onClick={() =>
              window.open(
                "/src/assets/Portfolio_Faraihan Rafi Adityawarman.pdf",
                "Portfolio",
                "width=800,height=900,scrollbars=yes,resizable=yes",
              )
            }
            className="inline-block border border-indigo-400 text-indigo-400 font-semibold px-6 py-3 rounded-md hover:bg-indigo-400 hover:text-white transition-colors duration-300"
          >
            View My Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
