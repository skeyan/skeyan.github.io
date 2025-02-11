export default class Footer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();

        // Initialize animations
        if (typeof window.contentWayPoint === 'function') {
            window.contentWayPoint();
        }
    }

    render() {
        const currentYear = new Date().getFullYear();
        const template = `
            <footer class="ftco-footer ftco-bg-pref ftco-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Eva Yan.</h2>
                                <p>
                                    Hi there! Thank you for visiting my portfolio. Feel free to connect with me via email or through the links to the right.
                                    <br>
                                    I am open to opportunities and would love to talk more about creative interactive development.
                                </p>
                            </div>
                        </div>

                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Contact Information</h2>
                                <ul class="list-unstyled">
                                    <p>New York, NY</p>
                                    <p>eyan749@protonmail.com</p>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li class="ftco-animate">
                                        <a href="https://www.linkedin.com/in/sk-evayan/" target="_blank">
                                            <span class="icon-linkedin"></span>
                                        </a>
                                    </li>
                                    <li class="ftco-animate">
                                        <a href="https://github.com/skeyan" target="_blank">
                                            <span class="icon-github"></span>
                                        </a>
                                    </li>
                                    <li class="ftco-animate">
                                        <a href="https://masotzhen.itch.io/" target="_blank">
                                            <span class="icon-gamepad"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p>Copyright &copy;${currentYear} All rights reserved | This template is made with <span class="icon-heart"></span> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        
        if (this.container) {
            this.container.innerHTML = template;
        } else {
            console.error('Footer container not found');
        }
    }
}