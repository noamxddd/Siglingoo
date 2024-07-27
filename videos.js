document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.gallery-video');
    
    videos.forEach(video => {
        const container = video.parentElement;
        const description = container.querySelector('.video-description');
        
        // Mostrar descripción al pasar el mouse
        video.addEventListener('mouseenter', function() {
            description.textContent = this.dataset.description;
            description.style.opacity = '1';
        });

        video.addEventListener('mouseleave', function() {
            description.style.opacity = '0';
        });

        // Mostrar controles al pasar el mouse
        video.addEventListener('mouseenter', function() {
            this.setAttribute('controls', '');
        });

        video.addEventListener('mouseleave', function() {
            if (!this.paused) {
                this.removeAttribute('controls');
            }
        });
    });
});