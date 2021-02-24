//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input
//и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

{
  /* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
}

const boxes = document.querySelector("boxes");
// console.log(boxes);
const renderBtn = document.querySelector("[data-action = 'render']");
const destroyBtn = document.querySelector("[data-action = 'destroy']");
// console.log(destroyBtn);
destroyBtn.addEventListener("click", (e) => {
  input.valuo = 0;
});

let random = Math.round(Math.random() * 255);
// box.style.backgroundColor = `rgb(${random},${random},${random})`;
