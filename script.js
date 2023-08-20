document.addEventListener('DOMContentLoaded', function () {
    const drums = document.querySelectorAll('.drum');
    
    drums.forEach(drum => {
        drum.addEventListener('click', () => playSound(drum));
    });
    
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const drum = document.querySelector(`.drum[data-key="${key.charCodeAt(0)}"]`);
        if (drum) {
            playSound(drum);
        }
    });
    
    function playSound(drum) {
        const audio = drum.querySelector('audio');
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }
});qq