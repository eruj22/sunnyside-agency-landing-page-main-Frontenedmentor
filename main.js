const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});