document.addEventListener('DOMContentLoaded', (event) => {
    const output = document.getElementById('output');
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.getAttribute('data-key');
            if (keyValue === 'backspace') {
                output.value = output.value.slice(0, -1); 
            } else {
                output.value += keyValue;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("instruccionesModal");
    const btn = document.getElementById("instruccionesBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const buttonPrev = document.querySelector('.carousel-button.prev');
    const buttonNext = document.querySelector('.carousel-button.next');
  
    let currentIndex = 0;
  
    function showItem(index) {
      if (index < 0) {
        currentIndex = items.length - 1;
      } else if (index >= items.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const translateX = -currentIndex * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
    }
  
    buttonPrev.addEventListener('click', () => {
      showItem(currentIndex - 1);
    });
  
    buttonNext.addEventListener('click', () => {
      showItem(currentIndex + 1);
    });
  
  
    setInterval(() => {
      showItem(currentIndex + 1);
    }, 5000); 
  });
  