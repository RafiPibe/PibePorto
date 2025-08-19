// src/components/Contact.jsx
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Contact() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [isCopied, setIsCopied] = useState(false);
    const email = 'faraihanrafia@gmail.com';

    const handleCopyEmail = () => {
        // Use the modern, secure Clipboard API
        navigator.clipboard.writeText(email).then(() => {
            setIsCopied(true);
            // Hide the message after 2 seconds
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <section 
            id="contact" 
            ref={ref}
            className={`py-20 md:py-32 text-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hello!
            </p>
            <div className="relative inline-flex justify-center items-center">
                <button 
                    onClick={handleCopyEmail}
                    className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition-colors duration-300"
                >
                    {email}
                </button>
                {/* Conditionally render the "Copied!" message based on state */}
                <span 
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-indigo-400 transition-opacity duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}
                >
                    Copied!
                </span>
            </div>
        </section>
    );
}

export default Contact;