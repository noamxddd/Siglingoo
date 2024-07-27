document.addEventListener('DOMContentLoaded', function() {
    const wordContainers = document.querySelectorAll('.word-container');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const instructionsBtn = document.getElementById('instructionsBtn');
    const instructionsModal = document.getElementById('instructionsModal');
    const instructionsCloseBtn = instructionsModal.getElementsByClassName('close')[0];
    
    wordContainers.forEach(container => {
        const images = container.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    instructionsBtn.onclick = function() {
        instructionsModal.style.display = "block";
    }

    instructionsCloseBtn.onclick = function() {
        instructionsModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        if (event.target == instructionsModal) {
            instructionsModal.style.display = "none";
        }
    }
});

// Funcionalidad de los botones
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'siguiente lección') {
            console.log('Avanzando a la siguiente lección...');
            // Aquí puedes añadir la lógica para cambiar de lección
        } else {
            checkAnswer(this.textContent);
        }
    });
});

// Función para verificar la respuesta
function checkAnswer(answer) {
    const correctAnswer = 'hola';
    const celebrationElement = document.getElementById('celebration');
    const video = document.getElementById('signVideo');

    // Pausar el video cuando se selecciona una respuesta
    video.pause();

    if (answer.toLowerCase() === correctAnswer) {
        console.log('¡Respuesta correcta!');
        celebrationElement.style.display = 'block';
        
        // Ocultar el festejo después de 3 segundos
        setTimeout(() => {
            celebrationElement.style.display = 'none';
        }, 3000);
    } else {
        console.log('Respuesta incorrecta. Intenta de nuevo.');
        celebrationElement.style.display = 'none';
    }
}

// Funcionalidad del ícono de inicio
document.querySelector('.home-icon').addEventListener('click', function() {
    console.log('Volviendo al inicio...');
    // Aquí puedes añadir la lógica para volver a la pantalla de inicio
});