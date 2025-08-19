import React from 'react';

function Header() {
    return (
        <footer class="py-12">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p class="text-gray-500 mb-4 md:mb-0">&copy; 2025 Faraihan Rafi Adityawarman. All Rights Reserved.</p>
            <div class="flex space-x-6">
                <a href="https://github.com/RafiPibe" class="text-gray-500 hover:text-indigo-400 transition-colors duration-300">GitHub</a>
                <a href="https://www.linkedin.com/in/faraihanrafia/" class="text-gray-500 hover:text-indigo-400 transition-colors duration-300">LinkedIn</a>
                <a href="https://faraihanrafia.carrd.co" class="text-gray-500 hover:text-indigo-400 transition-colors duration-300">Art Porto</a>
            </div>
        </div>
    </footer>
    );
}

export default Header;