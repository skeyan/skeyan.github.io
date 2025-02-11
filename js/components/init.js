// init.js
import Navbar from './navbar.js';

// Initialize all components
const initializeComponents = () => {
    new Navbar('nav-container');
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeComponents);