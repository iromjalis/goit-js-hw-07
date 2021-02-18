// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */
}
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let inputEl = document.querySelector("#validation-input");
let idEl = inputEl.id;

inputEl.addEventListener("input", onInputChange);

let inputLength = inputEl.dataset.length;
console.log(Number(inputLength)); //6

function onInputChange(event) {
  // console.log("Инпут изменился");
  inputEl = event.currentTarget.value;

  console.log("inputEl", inputEl); //то что ввожу
  console.log(inputEl.length); //длина  введенного
  console.log(inputEl.length === inputLength);
  if (inputEl.length === Number(inputLength) && input.length !== null) {
    console.log("hello");
    inputEl.classList.add("#valid");
    console.log(inputEl.id);
  }
  inputEl.classList.add("#invalid");
}
