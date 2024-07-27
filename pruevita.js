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