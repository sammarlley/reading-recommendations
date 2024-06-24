document.querySelectorAll('.tabs a').forEach(tab => {
    tab.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.tabs a.active').classList.remove('active');
        this.classList.add('active');
        
        document.querySelectorAll('.main-content > div').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(this.getAttribute('href')).style.display = 'block';
    });
});

document.querySelector('#favorite-films').style.display = 'block';
