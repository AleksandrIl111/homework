document.addEventListener('DOMContentLoaded', () => {

    // Управление меню (бургер в хедере)
    document.getElementById('menu-toggle').addEventListener('click', function () {
        const navList = document.querySelector('.nav__list');
        navList.classList.toggle('active');
    });
    document.getElementById('menu-ttoggle').addEventListener('click', function () {
        const navList = document.querySelector('.nav__list');
        navList.classList.toggle('active');
    });
});

// ============ Слайдер (3-я секция) =================================================
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 3; // Начинаем с первого основного слайда (учитывая добавленные слайды в начало)

    // Функция для обновления позиции слайдера
    const updateSlider = () => {
        const slideWidth = slides[0].clientWidth;
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Переключение на следующий слайд
    nextButton.addEventListener('click', () => {
        currentIndex++;
        sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        updateSlider();

        // Если дошли до конца, мгновенно переходим к началу
        if (currentIndex === slides.length - 3) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = 3;
                updateSlider();
            }, 500); // Ждем завершения анимации
        }
    });

    // Переключение на предыдущий слайд
    prevButton.addEventListener('click', () => {
        currentIndex--;
        sliderTrack.style.transition = 'transform 0.5s ease-in-out';
        updateSlider();

        // Если дошли до начала, мгновенно переходим к концу
        if (currentIndex === 0) {
            setTimeout(() => {
                sliderTrack.style.transition = 'none';
                currentIndex = slides.length - 6;
                updateSlider();
            }, 500); // Ждем завершения анимации
        }
    });
});

// =========== модалка 6-й секции =======================================
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("custom-modal");
    var modalContent = modal.querySelector(".texttest p");
    var photos = document.querySelectorAll('.overlay-content div[data-content]');
    var closeButton = modal.querySelector(".close1"); // Получаем кнопку закрытия

    photos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            var content = this.getAttribute('data-content');
            if (content) {
                console.log("Устанавливаем текст модального окна:", content);
                modalContent.textContent = content; // Обновляю текст модального окна
                modal.classList.add("show"); // Показываю модальное окно
            } else {
                console.error("data-content не найден для этого элемента!");
            }
        });
    });

    // Закрытие окна при клике вне его области
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove("show"); // Скрываю модальное окно
        }
    });

    // Закрытие окна при клике на кнопку закрытия
    closeButton.addEventListener('click', function() {
        modal.classList.remove("show"); // Скрываю модальное окно
    });
});

// =============== Модальные окна к кнопкам (Register, Start Now, Contact Us)==================
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









