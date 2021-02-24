// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//и изменяет инлайн-стиль span#text обновляя свойство font-size.
//В результате при перетаскивании ползунка будет меняться размер текста.*/

{
  /* <input id="font-size-control" type="range" /> */
}
{
  /* <br />
<span id="text">Абракадабра!</span> */
}

const textEl = document.getElementById("text");

const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener("input", (e) => {
  const size = inputEl.value;
  // console.log(size);

  textEl.style.fontSize = size + "px";
});
