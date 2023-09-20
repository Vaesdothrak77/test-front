// Установите начальное время обратного отсчета в формате "часы:минуты:секунды"
let countdownTime = "04:59:59";

// Обновляйте таймер каждую секунду
const x = setInterval(function() {
  const timeParts = countdownTime.split(":");
  let hours = parseInt(timeParts[0]);
  let minutes = parseInt(timeParts[1]);
  let seconds = parseInt(timeParts[2]);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(x);
    document.getElementById("countdown");
  } else {
    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;

      if (minutes < 0) {
        minutes = 59;
        hours--;

        if (hours < 0) {
          hours = 0;
        }
      }
    }

    countdownTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById("countdown").innerHTML = countdownTime;
  }
}, 1000);




const prevItems = document.querySelectorAll(".prev__items");
const largeImages = document.querySelectorAll(".product__large-image");

prevItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    largeImages.forEach((image) => {
      image.classList.remove("active");
    });

    largeImages[index].classList.add("active");
  });
});



// Получаем все кнопки и меню
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчики событий для каждой кнопки
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector('button');

  button.addEventListener('click', () => {
    // Переключаем класс 'active', чтобы открыть/закрыть меню
    dropdown.classList.toggle('active');
    
    // Закрываем все другие открытые меню, кроме текущего
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('active');
      }
    });
  });
});

