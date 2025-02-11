import Navbar from './navbar.js';
import Hero from './hero.js';

// Initialize all components
const initializeComponents = () => {
    new Navbar('nav-container');
    new Hero('hero-container');
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeComponents);