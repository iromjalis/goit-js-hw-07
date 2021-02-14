const currentPageUrl = "./about";

//найти по адресу строки
const linkEl = document.querySelector(`.site-nav__link[href='${currentPageUrl}']`);
console.log("найти по адресу строки", linkEl);

//добавить класс, а значит стили класса site-nav__link--current /красный/

linkEl.classList.add("site-nav__link--current");

const navEl = document.querySelector(".site-nav");
const firstNavItemEl = navEl.children[0];
console.log("добавить класс для красного", firstNavItemEl);

//создание элемента
const titleEl = document.createElement("h1");
titleEl.classList.add("page-title");
titleEl.textContent = "New element";
// console.log(titleEl);

//appendChild добавляет в конец
document.body.appendChild(titleEl);

const imageEl = document.createElement("img");
imageEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "picture";
imageEl.width = 250;
// console.log(imageEl);

//создание элемента в разметку
document.body.appendChild(imageEl);

const heroEl = document.querySelector(".hero");
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

heroEl.append(titleEl, imageEl);

const navItemEL = document.createElement("li");
navItemEL.classList.add(".site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "New link";
navLinkEl.href = "./index";

console.log("navItemEL: ", navItemEL);

navItemEL.appendChild(navLinkEl);
// console.log("связал вместе li и a", navLinkEl);

const navEL = document.querySelector(".site-nav");
//повесил в разметку
// navEl.appendChild(navItemEL);

navEl.insertBefore(navItemEL, navEl.firstElementChild);
