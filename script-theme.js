document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleDark');
    const body = document.querySelector('body');
    const circles = document.querySelectorAll('.circle');

    // Ensure the initial state is correct
    if (body.style.backgroundColor === 'black') {
        toggle.classList.remove('bi-brightness-high-fill');
        toggle.classList.add('bi-moon-fill');
        circles.forEach(circle => circle.style.backgroundColor = 'white');
    } else {
        toggle.classList.add('bi-brightness-high-fill');
        toggle.classList.remove('bi-moon-fill');
        circles.forEach(circle => circle.style.backgroundColor = 'black');
    }

    toggle.addEventListener('click', function() {
        // Toggle icon classes
        this.classList.toggle('bi-brightness-high-fill');
        this.classList.toggle('bi-moon-fill');
        
        // Toggle theme
        if (this.classList.contains('bi-brightness-high-fill')) {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            body.style.transition = 'background-color 2s, color 2s';

            circles.forEach(circle => {
                circle.style.backgroundColor = 'black';
            });
        } else {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            body.style.transition = 'background-color 2s, color 2s';

            circles.forEach(circle => {
                circle.style.backgroundColor = 'white';
            });
        }
    });
});
