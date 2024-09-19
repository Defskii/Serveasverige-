const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

console.log("test");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
