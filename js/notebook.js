// const selectedById = document.querySelector("#menu");
// selectedById.style.textTransform = "uppercase";
// selectedById.style.fontSize = "2rem";
// console.log(selectedById); // ...

// const menuItemsByTagName = [...document.querySelectorAll("li")];
//!замена текста внутри тега
// menuItemsByTagName.forEach((el) => (el.textContent = `Hello `));
// console.log(menuItemsByTagName); // ...

const firstMenuItem = document.querySelector(".menu-item");
// console.log(firstMenuItem.textContent);
// firstMenuItem.style.color = "#BF4E30";
// console.log(firstMenuItem); // ...
//_____________________________________________
// const article = document.querySelector("article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
{
  /* <a class="link" href="#">Read more...</a>`; */
}
// article.innerHTML = htmlString;

//!Вставить список за раз
// const list = document.querySelector(".list");
// console.log(list);
const tech = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const markup = tech.reduce((string, item) => string + `<li>${item}</li>`, "");
// console.log(markup);
// list.innerHTML = markup;
//____________________________
//!Шаблон для изображения карточки
const wrapper = document.querySelector(".wrapper");
inventors.forEach((el) => {
  wrapper.innerHTML = `<h2>${el.last}</h2><h3>${el.first}</h3><img src=${el.img} width = 150px>`;
});
//__________________________________________________
// const list = document.querySelector(".list");
// console.log(list);
// const newItem = document.createElement("li");
// const newItem2 = document.createElement("p");
// newItem.textContent = " New Item";
// newItem2.textContent = " paragraph";
// list.insertBefore(newItem, list.firstElementChild);
// const firstEl = list.firstElementChild;
// console.log(firstEl);
// firstEl.before(newItem2);
//_________________________________________________
const body = document.querySelector("body");
// const btn = document.querySelector(".circle");
// btn.style.backgroundColor = "red";
// btn.style.width = "250px";
// btn.style.height = "250px";
// btn.style.borderRadius = "50%";
// body.prepend(btn);

// let i = 0;
// const changeColor = (eventObject) => {
//   i++;
//   let random = Math.round(Math.random() * 255);
//   btn.style.backgroundColor = `rgb(${random},${random},${random})`;
//   btn.style.width = `${parseInt(btn.style.width) - 10}px`;
//   btn.style.height = `${parseInt(btn.style.height) - 10}px`;

// i > 2 ? btn.removeEventListener("click", changeColor) : "";

//   console.log(eventObject.type); //click
//   console.log(eventObject.target); //button
// };

// let a = btn.addEventListener("click", changeColor);
// console.log(btn.style.width);
// console.log(typeof btn.style.width);

const box = document.querySelectorAll(".box");
box.forEach((el, i) => (el.textContent = i + 1));
box.addEventListener;

const boxes = document.querySelector(".boxes");
console.log(boxes);

boxes.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  console.log(event.currentTarget.textContent);
});

//_______________________________
const input = document.querySelector("input");
console.log(input);
input.addEventListener("change", (e) => {
  const text = e.target.value;
  console.log(text);
  text.length <= "6" ? console.log("YES") : console.log("NO");
});
