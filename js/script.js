document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const close = document.querySelector('.close');

    document.querySelectorAll('.content-row img').forEach(img => {
        img.addEventListener('click', () => {
            popup.style.display = 'flex';
            popupImg.src = img.src;
            popupTitle.textContent = img.alt;
        });
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
