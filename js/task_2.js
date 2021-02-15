const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ulEl = document.querySelector("ul#ingredients");
// console.log(ulEl);

for (let ingredient of ingredients) {
  const liEl = document.createElement("li");
  // console.log(liEl);
  liEl.textContent = ingredient;
  ulEl.appendChild(liEl);
}

// const liEl = ingredients.map((ingredient) => {
//   const liEl = document.createElement("li");
//    console.log(liEl);
//   liEl.textContent = ingredient;
//   ulEl.appendChild(liEl);
// });
