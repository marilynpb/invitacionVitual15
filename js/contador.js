// Definir la fecha objetivo (15 de marzo a las 21hs, hora de Argentina)
const targetDate = new Date('April 06, 2024 20:30:00 GMT-0300');
        
// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualizar los elementos HTML
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Llamar a la función para que la cuenta regresiva se actualice de inmediato
updateCountdown();