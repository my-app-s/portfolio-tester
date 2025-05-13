window.onload = function() {
  let container = document.getElementById('div-flex');
  let rows = 20; // Количество строк
  let cols = 20; // Количество колонок
  let totalDivs = rows * cols; // Общее количество div

  for (let i = 0; i < totalDivs; i++) {
    let div = document.createElement('div');
    div.className = 'div-flex-item';

    // Устанавливаем размер каждого div
    div.style.width = `calc(100vw / ${cols})`;
    div.style.height = `calc(100vh / ${rows})`;

    // Генерируем случайный цвет
    // let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    // div.style.backgroundColor = randomColor;

    container.appendChild(div);
  }

  // Применяем случайную анимацию
  document.querySelectorAll('.div-flex-item').forEach(div => {
    let randomDuration = (Math.random() * (10 - 5) + 5).toFixed(2) + 's';
    let randomDelay = (Math.random() * (5 - 3) + 3).toFixed(2) + 's';
    div.style.animationDuration = randomDuration;
    div.style.animationDelay = randomDelay;
  });
};

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Отключает контекстное меню
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
        e.preventDefault(); // Отключает сочетания Ctrl+C, Ctrl+U, Ctrl+S
    }
});

document.addEventListener("dragstart", function (e) {
    e.preventDefault(); // Отключает перетаскивание
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        alert("Открытие панели разработчика запрещено.");
    }
});