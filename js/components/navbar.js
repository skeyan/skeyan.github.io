// navbar.js
class Navbar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentPath = window.location.pathname;
        this.render();
        this.attachEventListeners();
    }

    isActive(path) {
        // Handle index.html or / as home
        if (path === 'index.html' || path === '/') {
            return this.currentPath.endsWith('index.html') || this.currentPath === '/';
        }
        return this.currentPath.includes(path);
    }

    getNavLinkClass(path) {
        return `nav-link${this.isActive(path) ? ' active' : ''}`;
    }

    render() {
        const template = `
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                    <a class="navbar-brand" href="index.html">Eva Yan.</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" 
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="oi oi-menu"></span> Menu
                    </button>

                    <div class="collapse navbar-collapse" id="ftco-nav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="index.html" class="${this.getNavLinkClass('index.html')}">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" class="${this.getNavLinkClass('#about')}">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#projects" class="${this.getNavLinkClass('#projects')}">Projects</a>
                            </li>
                            <li class="nav-item cta">
                                <a href="contact.html" class="${this.getNavLinkClass('contact.html')}">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
        
        this.container.innerHTML = template;
    }

    attachEventListeners() {
        // Add scroll event listener for navbar styling
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('ftco-navbar');
            if (navbar) {
                if (window.scrollY > 200) {
                    navbar.classList.add('scrolled', 'awake');
                } else {
                    navbar.classList.remove('scrolled', 'awake');
                }

                if (window.scrollY > 300) {
                    navbar.classList.add('sleep');
                } else {
                    navbar.classList.remove('sleep');
                }
            }
        });

        // Add smooth scrolling to nav links
        document.querySelectorAll('#ftco-nav .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                        
                        // Update active state for hash links
                        document.querySelectorAll('#ftco-nav .nav-link').forEach(navLink => {
                            navLink.classList.remove('active');
                        });
                        link.classList.add('active');
                    }
                }
            });
        });
    }
}

export default Navbar;