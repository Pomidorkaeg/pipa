// Переключение видимости секции "Почему мы?"
document.querySelector('.why-us-button').addEventListener('click', function() {
    const section = document.getElementById('why-us-section');
    const body = document.body;

    // Переключаем отображение секции "Почему мы?"
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        body.classList.remove('no-scroll'); // Разрешаем прокрутку
    } else {
        section.style.display = 'none';
        body.classList.add('no-scroll'); // Запрещаем прокрутку
    }

    // Прокрутка страницы до секции
    section.scrollIntoView({ behavior: 'smooth' });
});

// Остальной JavaScript для открытия модальных окон и других функций
document.getElementById('downloadButton').addEventListener('click', function() {
    const url = 'https://drive.google.com/uc?export=download&id=1lvwTbq5PAQuNhzl1_B-GCHp1OdGCF433'; // Прямая ссылка
    const link = document.createElement('a'); 
    link.href = url;
    link.setAttribute('download', 'LuxWar.rar');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Остальной JavaScript для открытия модальных окон и других функций
document.getElementById('openSiteButton').addEventListener('click', function() {
    const url = 'https://drive.google.com/uc?export=download&id=1p_HoTLFNFU0cpAjqJcsYjv7c-YglPOmB'; // Прямая ссылка
    const link = document.createElement('a'); 
    link.href = url;
    link.setAttribute('download', 'cfg.rar');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Перемещение кнопки "Почему мы?"
let isDragging = false;
let offsetX, offsetY;

const whyUsButton = document.querySelector('.why-us-button');

whyUsButton.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - whyUsButton.getBoundingClientRect().left;
    offsetY = e.clientY - whyUsButton.getBoundingClientRect().top;
    document.addEventListener('mousemove', moveButton);
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    document.removeEventListener('mousemove', moveButton);
});

function moveButton(e) {
    if (isDragging) {
        whyUsButton.style.left = `${e.clientX - offsetX}px`;
        whyUsButton.style.top = `${e.clientY - offsetY}px`;
    }
}

// Открытие модального окна с инструкцией
document.querySelector('.instruction-button').addEventListener('click', function() {
    document.getElementById('instructionModal').style.display = 'block';
});

// Закрытие окна
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('instructionModal').style.display = 'none';
});

// Закрытие окна при клике вне его
window.addEventListener('click', function(event) {
    let modal = document.getElementById('instructionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Открытие модального окна "Соц.сети"
document.querySelector('.social-media-button').addEventListener('click', function() {
    document.getElementById('socialMediaModal').style.display = 'block';
});

// Закрытие модального окна "Соц.сети"
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('socialMediaModal').style.display = 'none';
});

// Закрытие окна при клике вне его
window.addEventListener('click', function(event) {
    let modal = document.getElementById('socialMediaModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Открытие выбранной соц.сети при клике на изображение
document.querySelectorAll('.social-media-img').forEach(function(img) {
    img.addEventListener('click', function() {
        const url = img.getAttribute('data-url');
        window.open(url, '_blank'); // Открываем ссылку в новой вкладке
    });
});

// Открытие модального окна
document.querySelector('.social-media-button').addEventListener('click', function() {
    document.getElementById('socialMediaModal').style.display = 'block';
});

// Закрытие модального окна при клике на крестик
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('socialMediaModal').style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    var modal = document.getElementById('socialMediaModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Закрытие модального окна при клике на крестик
document.querySelectorAll('.close').forEach(function(button) {
    button.addEventListener('click', function() {
        button.closest('.modal').style.display = 'none';
    });
});

// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.querySelector('.modal-overlay');

    // Закрываем все открытые модальные окна
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });

    // Открываем выбранное модальное окно и затемняем фон
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    overlay.style.display = 'none';
}

// Открытие модального окна с инструкцией
document.querySelector('.instruction-button').addEventListener('click', function() {
    openModal('instructionModal');
});

// Открытие модального окна "Соц.сети"
document.querySelector('.social-media-button').addEventListener('click', function() {
    openModal('socialMediaModal');
});

// Закрытие модального окна при клике на крестик
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', closeModal);
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});
