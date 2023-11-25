const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})