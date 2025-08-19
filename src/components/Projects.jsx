import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import yayplantsImg from '../assets/YayPlants.svg';
import AccommodationXImg from '../assets/AccommodationX.svg';
import LingoLinkImg from '../assets/LingoLink.svg'
import bcaRevampImg from '../assets/BCARevamp.svg'

function Projects() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="projects" ref={ref} className={`py-20 md:py-32 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-2xl font-bold text-white mb-12">Projects and study cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {/* Project 1 */}
                <a href="#" className="group block">
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img 
                        src={yayplantsImg}
                        alt="YayPlants! image"
                        className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">YayPlants!</h3>
                    <p className="text-gray-400">A mobile first web application focusing on finding your desired plants to take pictures of.</p>
                </a>

                {/* Project 2 */}
                <a href="#" className="group block">
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img 
                        src={AccommodationXImg}
                        alt="AccommodationX image"
                        className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">AccommodationX</h3>
                    <p className="text-gray-400">A mobile app that helps you in finding accommodation and helping you ease up your living.</p>
                </a>

                {/* Project 3 */}
                <a href="#" className="group block">
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img 
                        src={LingoLinkImg} 
                        alt="LingoLink image"
                        className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">LingoLink</h3>
                    <p className="text-gray-400">A mobile app focusing on connecting students and finding those with the same interests.</p>
                </a>

                {/* Project 4 */}
                <a href="#" className="group block">
                    <div className="overflow-hidden rounded-lg mb-6">
                        <img 
                        src={bcaRevampImg}
                        alt="bcaRevamp image"
                        className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">BCA Revamp</h3>
                    <p className="text-gray-400">My twist on the old mybca m-banking</p>
                </a>

            </div>
        </section>
    );
}

export default Projects;