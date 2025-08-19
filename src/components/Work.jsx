import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import kenanganImg from '../assets/Kenangan.svg';
import docsRepoImg from '../assets/DocsRepo.svg';

function Work() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="work" ref={ref} className={`py-20 md:py-32 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-2xl font-bold text-white mb-12">Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {/* Project 1 */}
                <a href="#" className="group block">
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img 
                        src={kenanganImg}
                        alt="Kenangan.com image"
                        className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">Kenangan.com</h3>
                    <p className="text-gray-400">Kenangan.com is the first Gift Registry application in Indonesia that makes your special moments more special.</p>
                </a>
                
                {/* Project 2 */}
                <a href="#" className="group block">
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img 
                        src={docsRepoImg}
                        alt="Docs Repo image"
                        className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">Document Repository</h3>
                    <p className="text-gray-400">A document repository web app focused on streamlining work and projects in company</p>
                </a>
            </div>
        </section>
    );
}

export default Work;