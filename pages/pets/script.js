const arrPets = [
  {
    name: "Katrine",
    img: "../../assets/img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Jennifer",
    img: "../../assets/img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/img/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/img/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
  {
    name: "Scarlett",
    img: "../../assets/img/pets-scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/img/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  }
];
//Меню бургер
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul-nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("visible");
  ul.classList.toggle("visible");
  if (nav.classList.contains("visible")) {
    body.classList.toggle("menu");
    logo.classList.toggle("logo-menu-start");
    setTimeout(logotip, 400);
  } else {
    body.classList.toggle("menu");
    logo.classList.toggle("logo-menu-start");
    logotip();
  }
});
ul.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("visible");
  ul.classList.toggle("visible");
});
function logotip() {
  logo.classList.toggle("logo-menu");
}
const logo = document.querySelector(".logo");
const body = document.querySelector(".body");
ul.addEventListener("click", () => {
  if (body.classList.contains("menu")) {
    logo.classList.toggle("logo-menu-start");
    logotip();
    body.classList.toggle("menu");
  }
});

document.addEventListener("click", (event) => {
  if (nav.classList.contains("visible"))
    if (
      !event.target.classList.contains("nav") &&
      !event.target.classList.contains("hamburger") &&
      !event.target.classList.contains("line")
    )
      hamburger.click();
});

/*POPUP*/
const POPUP = document.querySelector(".popup");
function popupIsOut() {
  document.querySelector(".btn-popup").classList.add("hover");
}
function popupIsOver() {
  document.querySelector(".btn-popup").classList.remove("hover");
}
function popupIsActive(number) {
  POPUP.innerHTML = `
      <img src=${arrPets[(8 + number) % 8].img} class="popup-image" alt="${arrPets[(8 + number) % 8].name}">
      <div class="popup-content">
        <h2 class="popup-content-name">${arrPets[(8 + number) % 8].name}</h2>
        <p class="popup-content-type-and-breed">${arrPets[(8 + number) % 8].type} - ${arrPets[(8 + number) % 8].breed}</p>
        <p class="popup-content-description">${arrPets[(8 + number) % 8].description}</p>
        <ul style="margin-left: 15px;">
          <li class="popup-content-other">
            <label class="popup-content-other-tittle">Age: </label>
            <label class="popup-content-other-text">${arrPets[(8 + number) % 8].age}</label>
          </li>
          <li class="popup-content-other"> 
            <label class="popup-content-other-tittle">Inoculations: </label>
            <label class="popup-content-other-text">${arrPets[(8 + number) % 8].inoculations}</label>
          </li>
          <li class="popup-content-other"> 
            <label class="popup-content-other-tittle">Diseases: </label>
            <label class="popup-content-other-text">${arrPets[(8 + number) % 8].diseases}</label>
          </li>
          <li class="popup-content-other"> 
            <label class="popup-content-other-tittle">Parasites: </label>
            <label class="popup-content-other-text">${arrPets[(8 + number) % 8].parasites}</label>
          </li>
        </ul>
      </div>
      <button class="btn-popup hover">x</button>`;
  POPUP.classList.toggle("active");
  body.classList.add("menu");
}
function popupDeaActive(event) {
  if (
    !event.target.closest(".popup") ||
    event.target.classList.contains("btn-popup")
  ) {
    body.classList.remove("menu");
    POPUP.classList.remove("active");
  }
};
const CARDS = document.querySelectorAll(".card");
document.addEventListener("click", (event) => {
  if (POPUP.classList.contains("active")) {
    popupDeaActive(event);
  }
  else if (event.target.closest(".card")) {
    if (event.target.closest(".card").children[1].innerText) {
      console.log(event.target.closest(".card").children[1].innerText);
      for (let i = 0; i < 48; i++) {
        if (document.querySelectorAll(".card")[i].children[1].innerText == event.target.closest(".card").children[1].innerText) {
          console.log(i);
          popupIsActive(i);
          break;
        }
      }
    }
  }
});
// Отрисовка карточек питомцев
const windowInnerWidth = window.innerWidth;
var arrCards = [];
if(windowInnerWidth >= 1280){
  console.log(windowInnerWidth);
  var petsPageHeight = 930;
  var maxPage = 6;
  for(let i = 0; i < maxPage; i++){
    arrCards.push(...([0, 1, 2, 3, 4, 5, 6, 7].sort((a,b) => Math.random() - 0.5)));
  }
}
else if(windowInnerWidth >= 768){
  var maxPage = 8;
  var petsPageHeight = 1395;
  for(let i = 0; i < maxPage; i++){
    arrCards.push(...([0, 1, 2, 3, 4, 5, 6, 7].sort((a,b) => Math.random() - 0.5).slice(0, 6)));
  }
}
else {
  var maxPage = 16;
  var petsPageHeight = 1395;
  for(let i = 0; i < maxPage; i++){
    arrCards.push(...([0, 1, 2, 3, 4, 5, 6, 7].sort((a,b) => Math.random() - 0.5).slice(0, 3)));
  }
}
//console.log(arrCards.sort((a,b) => a - b));

let animationActive = false;
//let arrCards = [0, 1, 2, 3, 4, 5, 6, 7];

console.log(arrCards);
const SLIDER_PETS = document.querySelector(".cards-container");
SLIDER_PETS.addEventListener("animationend", () => {
  SLIDER_PETS.style.top = `${-petsPageHeight * (currentPage - 1)}px`;
  SLIDER_PETS.classList.remove("transition-up");
  SLIDER_PETS.classList.remove("transition-down");
  animationActive = false;
});
function drawPets() {
  document.querySelector(".cards-container").innerHTML = "";
  for (let i = 0; i < arrCards.length; i++) {
    let card = document.createElement('div');
    card.className = "card";
    card.innerHTML = drawCard(arrCards[i]);
    document.querySelector(".cards-container").append(card);
  }
}
function drawCard(item) {
  let card = document.createElement('div');
  card.innerHTML = `
    <img class="cards-image" src=${arrPets[item].img} alt=${arrPets[item].name}>
    <h3 class="cards-text">${arrPets[item].name}</h3>
    <button class="cards-button">Learn more</button>`;
  return card.innerHTML;
}
drawPets();
// Панель управления пагинацией
var currentPage = 1;
const PAGE_NUMBER = document.querySelector(".current-pos");
const LEFT = document.querySelector(".left");
const MORE_LEFT = document.querySelector(".more-left");
const RIGHT = document.querySelector(".right");
const MORE_RIGHT = document.querySelector(".more-right");
MORE_LEFT.addEventListener("click", () => {
  if (currentPage != 1 && animationActive != true) {
    document.documentElement.style.setProperty('--slider-from', `${-petsPageHeight * (currentPage - 1)}px`);
    currentPage = 1;
    document.documentElement.style.setProperty('--slider-to', `${-petsPageHeight * (currentPage - 1)}px`);
    PAGE_NUMBER.innerText = currentPage;
    SLIDER_PETS.classList.add("transition-down");
    changeBtnActive();
  }
});
LEFT.addEventListener("click", () => {
  if (currentPage > 1 && animationActive != true) {
    document.documentElement.style.setProperty('--slider-from', `${-petsPageHeight * (currentPage - 1)}px`);
    document.documentElement.style.setProperty('--slider-to', `${-petsPageHeight * (currentPage - 1) + petsPageHeight}px`);
    currentPage--;
    PAGE_NUMBER.innerText = currentPage;
    SLIDER_PETS.classList.add("transition-down");
    changeBtnActive();
  }
});
RIGHT.addEventListener("click", () => {
  if (currentPage < maxPage && animationActive != true) {
    document.documentElement.style.setProperty('--slider-from', `${-petsPageHeight * (currentPage - 1)}px`);
    document.documentElement.style.setProperty('--slider-to', `${-petsPageHeight * (currentPage - 1) - petsPageHeight}px`);
    currentPage++;
    PAGE_NUMBER.innerText = currentPage;
    SLIDER_PETS.classList.add("transition-up");
    changeBtnActive();
  }
});
MORE_RIGHT.addEventListener("click", () => {
  if (currentPage != maxPage && animationActive != true) {
    document.documentElement.style.setProperty('--slider-from', `${-petsPageHeight * (currentPage - 1)}px`);
    currentPage = maxPage;
    document.documentElement.style.setProperty('--slider-to', `${-petsPageHeight * (currentPage - 1)}px`);
    PAGE_NUMBER.innerText = currentPage;
    SLIDER_PETS.classList.add("transition-up");
    changeBtnActive();
  }
});
function changeBtnActive() {
  animationActive = true;
  if (currentPage > (maxPage - 1)) {
    RIGHT.classList.remove("is-active");
    MORE_RIGHT.classList.remove("is-active");
  }
  else {
    RIGHT.classList.add("is-active");
    MORE_RIGHT.classList.add("is-active");
  }
  if (currentPage < 2) {
    LEFT.classList.remove("is-active");
    MORE_LEFT.classList.remove("is-active");
  }
  else {
    LEFT.classList.add("is-active");
    MORE_LEFT.classList.add("is-active");
  }
}
