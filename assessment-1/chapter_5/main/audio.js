document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    audio.play().catch(error => console.log("Autoplay blocked:", error));
});