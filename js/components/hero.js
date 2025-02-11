class Hero {
    constructor(containerId) {
        this.container = document.getElementById(containerId);

        if (!this.container) {
            console.log(`Hero container #${containerId} not found, skipping initialization`);
            return;
        }
        
        this.render();
        this.initFullHeight();
        
        // Initialize animations
        if (typeof window.contentWayPoint === 'function') {
            window.contentWayPoint();
        }

        // Initialize particles after container is rendered
        this.initParticles();
    }

    initParticles() {
        // First make sure the particles container exists
        if (!document.getElementById('particles-js')) {
            console.log('Particles container not found, skipping particle initialization');
            return;
        }

        // Create and load the particles script
        const particlesScript = document.createElement('script');
        particlesScript.src = 'js/particle.js';
        
        // Wait for the script to load before initializing
        particlesScript.onload = () => {
            // Double check if particlesJS is available
            if (typeof window.particlesJS !== 'function') {
                console.log('ParticlesJS not found after loading script');
                return;
            }
            
            // Initialize particles with configuration
            window.particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false
                    },
                    "size": {
                        "value": 3,
                        "random": true
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    }
                },
                "retina_detect": true
            });
        };

        // Handle script loading errors
        particlesScript.onerror = () => {
            console.log('Failed to load particle.js script');
        };

        // Append the script to the document
        document.body.appendChild(particlesScript);
    }

    initFullHeight() {
        const setHeight = () => {
            const fullHeightElements = document.querySelectorAll('.js-fullheight');
            const windowHeight = window.innerHeight;
            fullHeightElements.forEach(element => {
                element.style.height = `${windowHeight}px`;
            });
        };

        setHeight();
        window.addEventListener('resize', setHeight);
    }

    render() {
        const template = `
            <div class="hero-wrap js-fullheight">
                <div class="overlay"></div>
                <div id="particles-js"></div>
                <div class="container h-100">
                    <div class="row no-gutters slider-text align-items-center justify-content-center h-100">
                        <div class="col-md-7 ftco-animate text-center">
                            <h1 class="hero-text mb-4">
                                Hi there! I'm <strong>Eva Yan</strong>,
                                a software engineer with a passion for interactive
                                media of all kinds!
                            </h1>
                            <p><a href="contact.html" class="my-btn">Get in touch</a></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.container.innerHTML = template;
    }
}

export default Hero;