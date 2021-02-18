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
// console.log(Number(inputLength)); //6

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
//!====================
// Callback

// const askName = function (helloMsg) {
//   let name = prompt("What is your name?");
//   console.log(helloMsg + name);
// };

// const askCountry = function (countryMsg) {
//   let country = prompt("What are you from?");
//   console.log(countryMsg + country);
// };

// const greeting = function (callback, callback2) {
//   let helloMsg = `Hello, my name is `;
//   let countryMsg = `I am from  `;

//   callback(helloMsg);
//   callback2(countryMsg);
// };

// greeting(askName, askCountry);

// const calculator = function (num, callback) {
//   let sum = num + 10;
//   let remove = num - 50;
//   callback(sum);
//   callback(remove);
// };

// const add = function (num) {
//   console.log(num);
// };

// const remove = function (num) {
//   console.log(num);
// };

// calculator(100, add);
// calculator(100, remove);

// __________________________________________________

// const exp = function (n, action) {
//   for (let i = 1; i < n; i += 1) {
//     action(i);
//   }
// };

// const callback = function (num) {
//   console.log(num * num);
// };
// exp(10, callback);//1,4,9,16,25,36...
// _____________________________________
// const rec = function (num) {
//   if (num > 0) {
//     console.log(num);
//     return rec(num - 1);
//   }
// };
// rec(10);

//___________________________________________
