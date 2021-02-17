// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);
// const inputLength = document.querySelector("#validation-input");
// inputEl.addEventListener("blur", onInputBlur);

// let outputEl = document.querySelector("#name-output");

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);
// }

// function onInputBlur() {
//   console.log("Инпут потерял фокус - событие blur");
// inputEl = currentTarget.value;

//   console.log(inputEl);

//   if (inputEl.length === 6) {
//     inputEl.classList.add(".valid");
//   } else inputEl.classList.add(".invalid");
// }
//!==============================================
const clearLogBtn = document.querySelector('button[data-action="clear"]');
const logList = document.querySelector(".log-list");

window.addEventListener("keydown", logMessage);
// window.addEventListener("keyup", logMessage);

clearLogBtn.addEventListener("click", (e) => {
  logList.innerHTML = "";
});

function logMessage({ type, key, code }) {
  const message = document.createElement("section");
  const title = document.createElement("h2");
  title.textContent = `${type} event`;

  const text = document.createElement("p");
  text.textContent = `key value is "${key}" | code value is "${code}"`;

  message.append(title, text);
  logList.appendChild(message);
}
