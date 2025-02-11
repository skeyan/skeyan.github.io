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

        // Re-run particles initialization
        const particlesScript = document.createElement('script');
        particlesScript.src = 'js/particle.js';
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