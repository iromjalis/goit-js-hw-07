const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);

const newElement = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});
console.log("newElement: ", newElement);
const makeIngredients = (ingredients) => {
  return ingredients;
};
ulEl.append(...newElement);
