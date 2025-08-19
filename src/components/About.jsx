import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function About() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="about" ref={ref} className={`py-20 md:py-32 fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="grid md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
                </div>
                <div className="md:col-span-2 text-gray-300 space-y-4">
                    <p>
                        Hello! I'm Faraihan Rafi Adityawarman, people call me Pibe. I'm a passionate developer with a knack for creating clean, user-friendly, and good looking interfaces. My journey into the world of design started in the world of PowerPoint, and has since grown into a full-fledged passion for building things.
                    </p>
                    <p>
                        I specialize in UI / UX Design and development,love to design beautiful and user-friendly websites and applications. I also do a little bit of Front-End Development with a strong focus on JavaScript frameworks like React and Vue. I love bringing ideas to life in the browser and am always eager to learn new things.
                    </p>
                    <p>
                        When I'm not working on Figma or coding, you can find me doing photography, playing games, or watching tokusatsu.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;