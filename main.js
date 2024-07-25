
document.addEventListener("DOMContentLoaded", function() {
    const adContainers = document.querySelectorAll('.ad-container');

    adContainers.forEach(container => {
        let index = 0;
        const slides = container.querySelectorAll('.ad-slide');
        setInterval(() => {
            slides[index].style.display = 'none';
            index = (index + 1) % slides.length;
            slides[index].style.display = 'block';
        }, 10000);
    });
});

