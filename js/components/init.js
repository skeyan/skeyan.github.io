import Navbar from './navbar.js';
import Hero from './hero.js';
import Footer from './footer.js';
import GalleryCard from './gallery-card.js';

const projects = [
    {
        title: "Remy: A NYC Apartment Renter's Companion",
        description: "A web app that battles New York's housing crisis. Done in a group of 4.",
        image: "/images/remy-splash.png",
        tags: ["React", "Next.js", "Express", "MongoDB"],
        demoUrl: "https://www.youtube.com/watch?v=kgD-H-XxxW8",
        githubUrl: "https://github.com/RemyCapstone/capstone"
    },
    {
        title: "LinkedIn's modernized reporting flow",
        description: "A complete overhaul of the web reporting flow.",
        image: "/images/linkedin-reportin.png",
        tags: ["JavaScript", "Ember.js", "TypeScript", "GraphQL"],
        demoUrl: "",
        githubUrl: ""
    }
];

// Initialize all components
const initializeComponents = () => {
    new Navbar('nav-container');
    new Hero('hero-container');
    new Footer('footer-container');
    new GalleryCard('gallery-container', projects);
};

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeComponents);