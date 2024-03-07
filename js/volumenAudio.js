
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('miAudio');
    var audioIcon = document.getElementById('audioIcon');

    document.getElementById('toggleAudio').addEventListener('click', function() {
        if (audio.paused) {
            audioIcon.src = './img/icono/volume.svg';
            audio.play();
        } else {
            audioIcon.src = './img/icono/mute.svg';
            audio.pause();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('miAudio');
    audio.volume = 0.30; // Establece el volumen al 25%
});