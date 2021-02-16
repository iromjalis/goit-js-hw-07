{
  /* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
}

let inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", onInputChange);

let outputEl = document.querySelector("#name-output");

function onInputChange(event) {
  // console.log("Инпут изменился");
  inputEl = event.currentTarget.value;

  // console.log(inputEl);
  outputEl.innerText = inputEl;
  // console.log(outputEl);
  // console.log(typeof outputEl);
}
