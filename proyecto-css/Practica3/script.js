


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const swiper = new Swiper(".swiper", {
            loop: true,
            autoplay: {
                delay: 50000000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }, 100);
});

  

// Definir el tiempo inicial (en días, horas, minutos, segundos)
let days = 2;
let hours = 11;
let minutes = 20;
let seconds = 30;

// Convertir todo a segundos
let totalSeconds =
  days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

// Obtener el elemento para mostrar el contador
const contadorElemento = document.getElementById("contador");

const intervalo = setInterval(() => {
  // Calcular los días, horas, minutos y segundos restantes
  let remainingDays = Math.floor(totalSeconds / (24 * 60 * 60));
  let remainingHours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  let remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  let remainingSeconds = totalSeconds % 60;

  // Mostrar el tiempo restante en el formato adecuado
  contadorElemento.textContent = `${remainingDays}d, ${remainingHours} h, ${remainingMinutes} min, ${remainingSeconds} seg`;

  // Restar 1 segundo
  totalSeconds--;

  // Detener el intervalo cuando llegue a 0
  if (totalSeconds < 0) {
    clearInterval(intervalo);
    contadorElemento.textContent = "¡Tiempo agotado!";
  }
}, 1000); // Actualizar cada 1 segundo
