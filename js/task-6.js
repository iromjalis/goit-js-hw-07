/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

 Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 Для добавления стилей, используй CSS-классы valid и invalid.*/

let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});

// inputEl.classList.remove("invalid", "valid");
// let addClass = "invalid";
// if (text.length === +inputLength) addClass = "valid";
// inputEl.classList.add(addClass);

// if (text.length === +inputLength) inputEl.className = "valid";
// else inputEl.className = "invalid";
