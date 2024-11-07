let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Проверка на выход за пределы количества слайдов
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = "translateX(-" + (currentSlide * 100) + "%)";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Автоматическая смена слайдов
setInterval(() => {
    nextSlide();
}, 5000); // Каждые 5 секунд
