// ========= Слайдер =========================================
let currentSlideIndex1 = 0;
let currentSlideIndex2 = 0;

function changeSlide(direction, sliderNumber) {
    const slides = {
        1: document.querySelectorAll('.hero3 .slide'),
        2: document.querySelectorAll('.hero7 .slide')
    };
    if (sliderNumber === 1) {
        currentSlideIndex1 = (currentSlideIndex1 + direction + slides[1].length) % slides[1].length;
        slides[1].forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlideIndex1);
        });
    } else if (sliderNumber === 2) {
        currentSlideIndex2 = (currentSlideIndex2 + direction + slides[2].length) % slides[2].length;
        slides[2].forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlideIndex2);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {

    // Управление меню (бургер в хедере)
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const navList = document.querySelector('.nav__list');
        navList.classList.toggle('active');
    });

    // Добавляю обработчики для кнопок слайдера
    document.querySelectorAll('.hero3 .prev').forEach(button => {
        button.addEventListener('click', () => changeSlide(-1, 1));
    });
    document.querySelectorAll('.hero3 .next').forEach(button => {
        button.addEventListener('click', () => changeSlide(1, 1));
    });
    document.querySelectorAll('.hero7 .prev').forEach(button => {
        button.addEventListener('click', () => changeSlide(-1, 2));
    });
    document.querySelectorAll('.hero7 .next').forEach(button => {
        button.addEventListener('click', () => changeSlide(1, 2));
    });
});

// ======================= Video =============================
document.getElementById('playButton').addEventListener('click', function() {
    // Скрываю изображение и кнопку
    document.querySelector('.responsive-image').style.display = 'none';
    this.closest('.ellips1').style.display = 'none'; // Скрываю ellips1
    document.querySelector('.karta__compas').style.display = 'none'; // Скрываю компас
    // Показываю видео и начинаю воспроизведение
    var video = document.getElementById('myVideo');
    video.style.display = 'block';
    video.play();
});
// Скрываю ellips1 и karta__compas, когда видео начинает воспроизводиться
document.getElementById('myVideo').addEventListener('play', function() {
    document.querySelector('.ellips1').style.display = 'none'; // Скрываю ellips1
    document.querySelector('.karta__compas').style.display = 'none'; // Скрываю компас
});
// Показываем ellips1 и компас, когда видео заканчивается
document.getElementById('myVideo').addEventListener('ended', function() {
    document.querySelector('.ellips1').style.display = 'flex'; // Показываю ellips1
    document.querySelector('.karta__compas').style.display = 'block'; // Показываю компас
    this.style.display = 'none'; // Скрываю видео после окончания
    document.querySelector('.responsive-image').style.display = 'block'; // Показываю изображение
});

// ============= Модальное окно отзывов (6 секция) ======================
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("custom-modal");
    var modalContent = modal.querySelector(".custom-modal-content p");
    var closeButton = document.querySelector(".custom-close");
    var photos = document.querySelectorAll('.overlay-content div[data-content]');//Убедился,что выбираю div с data-content
    photos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            var content = this.getAttribute('data-content');
            if (content) {
                console.log("Устанавливаем текст модального окна:", content);
                modalContent.textContent = content; // Обновляю текст модального окна
                modal.style.display = "block"; // Показываю модальное окно
            } else {
                console.error("data-content не найден для этого элемента!");
            }
        });
    });
    closeButton.addEventListener('click', function() {
        modal.style.display = "none"; // Скрываю модальное окно
    });
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Скрываю модальное окно
        }
    });
});

// ===== Модальные окна к кнопкам (Register, Start Now, Contact Us)=====
// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}
// Функция для закрытия модального окна
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}
// Обработчики событий для кнопок
document.getElementById('register-button').addEventListener('click', function() {
    openModal('register-modal');
});
document.getElementById('open-modal').addEventListener('click', function() {
    openModal('start-modal');
});
document.getElementById('openn-modal').addEventListener('click', function() {
    openModal('start-modal');
});
document.getElementById('oopen-modal').addEventListener('click', function() {
    openModal('contact-modal');
});
// Закрытие модальных окон
document.getElementById('close-register').addEventListener('click', function() {
    closeModal('register-modal');
});
document.getElementById('close-start').addEventListener('click', function() {
    closeModal('start-modal');
});
document.getElementById('close-contact').addEventListener('click', function() {
    closeModal('contact-modal');
});
// Закрытие модальных окон при клике вне их
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal('register-modal');
        closeModal('start-modal');
        closeModal('contact-modal');
    }
});









