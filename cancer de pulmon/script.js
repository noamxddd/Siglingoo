// Función para expandir y contraer secciones
function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}
let currentIndex = 0;

function moveSlide(direction) {
    const imagesContainer = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    currentIndex += direction;

    // Si la imagen actual es la última, vuelve a la primera
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Si la imagen actual es la primera y presionamos "anterior", va a la última imagen
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const slideWidth = imagesContainer.clientWidth;
    imagesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
