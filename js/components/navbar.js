class Navbar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentPath = window.location.pathname;
        this.isHomePage = this.currentPath === '/' || this.currentPath.endsWith('index.html');
        this.render();
        this.initScrollspy();
        this.attachEventListeners();
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
                                <a href="${this.isHomePage ? '#page-top' : '/'}" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#projects" class="nav-link">Projects</a>
                            </li>
                            <li class="nav-item cta">
                                <a href="contact.html" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
        
        this.container.innerHTML = template;
    }

    initScrollspy() {
        // Add necessary attributes to body
        document.body.setAttribute('data-spy', 'scroll');
        document.body.setAttribute('data-target', '#ftco-navbar');
        document.body.setAttribute('data-offset', '200');

        // Add an ID to the top of the page for the home link
        document.body.setAttribute('id', 'page-top');

        // Initialize scrollspy via jQuery
        $(document).ready(() => {
            $('body').scrollspy({
                target: '#ftco-navbar',
                offset: 200
            });

            // Refresh scrollspy after dynamic content loads
            setTimeout(() => {
                $('body').scrollspy('refresh');
            }, 1000);

            // Fix for scrollspy not detecting the first section
            const firstSection = $('#page-top');
            if (firstSection.length && $(window).scrollTop() < 200) {
                $('#ftco-navbar .nav-link[href="#page-top"]').addClass('active');
            }
        });
    }

    attachEventListeners() {
        // Smooth scrolling for anchor links
        $(document).ready(() => {
            $('#ftco-nav a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                
                const target = $(this.hash);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 100)
                    }, 500, 'easeInOutExpo');
                    
                    // Close mobile menu if open
                    if ($('.navbar-toggler').is(':visible') && $('.navbar-collapse').hasClass('show')) {
                        $('.navbar-toggler').trigger('click');
                    }
                }
            });

            // Handle home link on non-homepage
            if (!this.isHomePage) {
                $('#ftco-nav a[href="/"]').on('click', function(e) {
                    e.preventDefault();
                    window.location.href = '/';
                });
            }
        });

        // Navbar scroll behavior
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
    }
}

export default Navbar;