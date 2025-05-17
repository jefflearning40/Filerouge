// hamburger.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});
document.getElementById('logo').addEventListener('click', function() {
    document.querySelectorAll('.form-container').forEach(function(form) {
        form.style.display = 'none';
    });
});