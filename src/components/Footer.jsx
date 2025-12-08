import React from 'react';

function Footer() {
    return (
        <footer className="py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-gray-500 mb-4 md:mb-0">&copy; 2025 Faraihan Rafi Adityawarman. All Rights Reserved.</p>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/RafiPibe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/faraihanrafia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://faraihanrafia.carrd.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
                    >
                        Art Porto
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
