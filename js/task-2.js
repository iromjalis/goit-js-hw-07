const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");
// console.log(list);
ulEl.innerHTML = list;
