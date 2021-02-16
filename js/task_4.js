// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const targetBtn = document.querySelector("#value");
let valueEl = Number(document.querySelector("#value").textContent);

let counterValue = document.querySelector("#value");
console.dir(counterValue);

const parentDivEL = document.querySelector("#counter");
const dekrBtn = parentDivEL.firstElementChild;
const inkrBtn = parentDivEL.lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  // console.log("Вешаю слушателя события на целевую кнопку");

  valueEl += 1;
  // console.log(valueEl);

  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
});

dekrBtn.addEventListener("click", (event) => {
  // console.log("Снимаю слушателя события с целевой кнопки");

  valueEl -= 1;
  // console.log(valueEl);

  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
});
