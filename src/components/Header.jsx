import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">Faraihan Rafi Adityawarman</Link>
                <nav className="hidden md:flex space-x-8">
                    <Link to="/#about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">About</Link>
                    <Link to="/#work" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Works & Projects</Link>
                    <Link to="/#contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Contact</Link>
                </nav>
                <div className="md:hidden">
                    {/* Mobile menu later */}
                </div>
            </div>
        </header>
    );
}

export default Header;