document.addEventListener('DOMContentLoaded', function() {
    const levels = [
        { number: 1, page: 'leccion1.html', image: 'img/tec-toluca.jpg' },
        { number: 2, page: 'leccion2.html', image: 'img/pexels-rdne-10029378.jpg' },
        { number: 3, page: 'leccion3.html', image: 'img/pexels-kevin-malik-9017412.jpg' },
      
      
    ];

    const levelsContainer = document.getElementById('levels-container');

    levels.forEach(level => {
        const levelDiv = document.createElement('div');
        levelDiv.className = 'level';
        levelDiv.style.backgroundImage = `url(${level.image})`;
        
        const content = document.createElement('div');
        content.className = 'level-content';
        
        const h2 = document.createElement('h2');
        h2.textContent = `Leccion ${level.number}`;
        
        const link = document.createElement('a');
        link.textContent = 'Realizar leccion';
        link.className = 'button';
        link.href = level.page;
        
        // Añadir efectos interactivos
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.boxShadow = '0 0 10px rgba(128, 0, 128, 0.5)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
            link.style.boxShadow = 'none';
        });

        link.addEventListener('mousedown', () => {
            link.style.transform = 'scale(0.95)';
        });

        link.addEventListener('mouseup', () => {
            link.style.transform = 'scale(1.1)';
        });

        content.appendChild(h2);
        content.appendChild(link);
        levelDiv.appendChild(content);
        levelsContainer.appendChild(levelDiv);
    });
});