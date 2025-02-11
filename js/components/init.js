import Navbar from './navbar.js';
import Hero from './hero.js';
import Footer from './footer.js';

// Initialize all components
const initializeComponents = () => {
    new Navbar('nav-container');
    new Hero('hero-container');
    new Footer('footer-container');
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeComponents);