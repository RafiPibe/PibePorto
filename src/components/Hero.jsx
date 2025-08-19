import React from 'react';

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center fade-in-section is-visible">
            <div className="max-w-5xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    I'm Pibe, a UI / UX Developer & Designer based in Indonesia.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8">
                    Currently studying at University of Queensland.
                </p>
                <a href="#work" className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    View My Work
                </a>
            </div>
        </section>
    );
}

export default Hero;