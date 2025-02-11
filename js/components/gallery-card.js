class GalleryCard {
    constructor(containerId, projects) {
        this.container = document.getElementById(containerId);
        this.projects = projects;
        this.render();
        
        // Initialize animations
        if (typeof window.contentWayPoint === 'function') {
            window.contentWayPoint();
        }
    }

    createCard(project) {
        return `
            <div class="gallery-card ftco-animate">
                <div class="gallery-card__inner">
                    <div class="gallery-card__front">
                        <img src="${project.image}" alt="${project.title}" class="gallery-card__image">
                    </div>
                    <div class="gallery-card__back">
                        <h3 class="gallery-card__title">${project.title}</h3>
                        <p class="gallery-card__description">${project.description}</p>
                        <div class="gallery-card__tags">
                            ${project.tags.map(tag => `<span class="gallery-card__tag">${tag}</span>`).join('')}
                        </div>
                        <div class="gallery-card__links">
                            ${project.demoUrl ? 
                                `<a href="${project.demoUrl}" target="_blank" class="gallery-card__link">Live Demo</a>` : ''}
                            ${project.githubUrl ? 
                                `<a href="${project.githubUrl}" target="_blank" class="gallery-card__link">GitHub</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render() {
        const galleryHTML = `
            <div class="gallery-container">
                ${this.projects.map(project => this.createCard(project)).join('')}
            </div>
        `;
        
        if (this.container) {
            this.container.innerHTML = galleryHTML;
        } else {
            console.error('Gallery container not found');
        }
    }
}

export default GalleryCard;