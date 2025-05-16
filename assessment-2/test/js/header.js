const sticky_header = document.getElementById('sticky-header');
const showAt = 1000;

window.addEventListener('scroll', () => {
    if (window.scrollY > showAt) {
        sticky_header.classList.add('visible');
    } else {
        sticky_header.classList.remove('visible');
    }
});