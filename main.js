const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

$(function() {
    $('.arrow').on('click', function(e) {
        e.preventDefault();
        console.log('ss');
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});