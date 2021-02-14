import products from "./products.js";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

// const elements = colorPickerOptions.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   console.log(buttonEl);
//   return buttonEl;
// });
// console.log(elements);

//!function

// const makeColorPickerOptions = (options) => {
//   return options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     console.log(buttonEl);
//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);
//========================================

const productsContainerEl = document.querySelector(".js-products");

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.textContent = name;
  nameEl.classList.add("product-name");

  const descrEl = document.createElement("p");
  descrEl.textContent = description;
  descrEl.classList.add("product-desc");

  const priceEl = document.createElement("p");
  priceEl.textContent = `Цена ${price} кредитов`;
  priceEl.classList.add("product-price");

  productEl.append(nameEl, descrEl, priceEl);
  return productEl;
};

console.log(makeProductCard(products[1]));

const elements = products.map(makeProductCard);
console.log(elements);
productsContainerEl.append(...elements);
