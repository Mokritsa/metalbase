const metallArr = [
  {
    name: "Трубы",
    type: "Черный металлопрокат",
    img: "../../assets/img/10.png",
    description: ["круглые э/с ф57мм-630мм", "бесшовные г/д и х/д", "водогазопроводные черные и оцинкованные ДУ15мм…ДУ100мм", "профильные 15х15мм…200х200мм"]
  },
  {
    name: "Листы",
    type: "Черный металлопрокат",
    img: "../../assets/img/11.png",
    description: ["х/к 1,5-3мм", "г/к 1,5-20мм", "оцинкованные 0,5-1мм"]
  },
  {
    name: "Арматура",
    type: "Черный металлопрокат",
    img: "../../assets/img/1.png",
    description: ["класса А500/А3 ф4-30мм","класса А240/А1 5-30мм"]
  },
  {
    name: "Круг стальной",
    type: "Черный металлопрокат",
    img: "../../assets/img/круг2.png",
    description: ["ст.3 ф6-300мм","ст.35/45 ф3-300мм"]
  },
  {
    name: "Уголок",
    type: "Черный металлопрокат",
    img: "../../assets/img/7_2.png",
    description: ["25х25мм…140х140мм"]
  },
  {
    name: "Швеллер",
    type: "Черный металлопрокат",
    img: "../../assets/img/швеллер.png",
    description: ["П/У 6,5-22"]
  },
  {
    name: "Вязальная проволока",
    type: "Черный металлопрокат",
    img: "../../assets/img/вязальна_проволока.png",
    description: ["Листы - Л63/ЛС59-1","Лента","Прутки","Трубы", "Шестигранники", "Квадраты"]
  },
  {
    name: "Алюминиевый прокат",
    type: "Цветной и нержавеющий прокат",
    img: "../../assets/img/colorMet.jpg",
    description: ["Плиты","Листы","Прутки","Труба", "Шины"]
  },
  {
    name: "Латунный прокат",
    type: "Цветной и нержавеющий прокат",
    img: "../../assets/img/colorMet.jpg",
    description: ["Лист - Л63/ЛС59-1","Лента","Прутки","Трубы", "Шестигранники", "Квадраты"]
  },
  {
    name: "Медный прокат",
    type: "Цветной и нержавеющий прокат",
    img: "../../assets/img/colorMet.jpg",
    description: ["Листы","Шины","Лента","Прутки","Трубы", "Полосы", "Аноды"]
  },
  {
    name: "Бронзовый прокат",
    type: "Цветной и нержавеющий прокат",
    img: "../../assets/img/colorMet.jpg",
    description: ["БРАЖ/БРОЦС 5-5-5 - Пруток","Лента"]
  },
  {
    name: "Нержавеющий прокат",
    type: "Цветной и нержавеющий прокат",
    img: "../../assets/img/colorMet.jpg",
    description: ["Листы AISI 304/430","Прутки AISI 304","Трубы круглые и профильные AISI 304/430"]
  },
];
//Меню бургер
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".ul-nav");
const windowInnerWidth = window.innerWidth;
hamburger.addEventListener("click", () => {
  if(windowInnerWidth < 768){
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("visible");
    ul.classList.toggle("visible");
    if (nav.classList.contains("visible")) {
      body.classList.toggle("no-scroll");
      logo.classList.toggle("logo-menu-start");
      setTimeout(logotip, 400);
  } else {
      body.classList.toggle("no-scroll");
      logo.classList.toggle("logo-menu-start");
      logotip();
    }
  }
});
ul.addEventListener("click", () => {
  if(windowInnerWidth < 768){
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("visible");
    ul.classList.toggle("visible");
  }
});
function logotip() {
  logo.classList.toggle("logo-menu");
}
const logo = document.querySelector(".logo");
const body = document.querySelector(".body");
ul.addEventListener("click", () => {
  if (body.classList.contains("no-scroll")) {
    logo.classList.toggle("logo-menu-start");
    logotip();
    body.classList.toggle("no-scroll");
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
/*Карусел*/
var animationActive = false;
const BTN_LEFT = document.querySelector(".btn-left");
const BTN_RIGHT = document.querySelector(".btn-right");
const SLIDER = document.querySelector(".slider");
const CARUSEL = document.querySelector(".carusel");

function moveLeft() {
  if (animationActive == false) {
    CARUSEL.classList.add("transition-left");
    animationActive = true;
  }
}
function moveRight() {
  if (animationActive == false) {
    CARUSEL.classList.add("transition-right");
    animationActive = true;
  }
}
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CARUSEL.addEventListener("animationend", () => {
  if (CARUSEL.classList.contains("transition-left")) {
    arrCardsNumber.unshift(arrCardsNumber.pop());
    arrCardsNumber.unshift(arrCardsNumber.pop());//если двухстрочная Carusel на 2 карточки
    drawPets();
    CARUSEL.classList.remove("transition-left");
  } else if (CARUSEL.classList.contains("transition-right")) {
    arrCardsNumber.push(arrCardsNumber.shift());
    arrCardsNumber.push(arrCardsNumber.shift());
    drawPets();
    CARUSEL.classList.remove("transition-right");
  }
  animationActive = false;
  //console.log("arr of cards = " + arrCardsNumber);
});
// Отрисовка карточек питомцев
const CARDS = document.querySelectorAll(".card");
var arrCardsNumber = [];
for (let i = 0; i < metallArr.length; i++) arrCardsNumber.push(i);
//console.log(arrCardsNumber);
drawPets();
function drawPets() {
  for (let i = 0; i < CARDS.length; i++) {
    CARDS[i].innerHTML = `
      <img class="cards-image" src=${metallArr[arrCardsNumber[i]].img} alt=${
      metallArr[arrCardsNumber[i]].name
    }>
      <h3 class="cards-text">${metallArr[arrCardsNumber[i]].name}</h3>
      <button class="cards-button">Подробнее</button>
      `;
  }
}

/*POPUP*/
const POPUP = document.querySelector(".popup");
function popupIsOut() {
  document.querySelector(".btn-popup").classList.add("hover");
}
function popupIsOver() {
  document.querySelector(".btn-popup").classList.remove("hover");
}
function popupIsActive(number) {
  let descript = "<ul class='popup-content-other'>";
  for (let i = 0; i< metallArr[number].description.length; i++){
    descript += `<li>${metallArr[number].description[i]}</li>`
  }
  descript += "</ul>"
  POPUP.innerHTML = `
      <img src=${metallArr[number].img} class="popup-image" alt="${metallArr[number].name}">
      <div class="popup-content">
        <h2 class="popup-content-name">${metallArr[number].name}</h2>
        <p class="popup-content-type">${metallArr[number].type}</p>
        <p class ="popup-content-other-tittle">${descript}</p>
      <button class="btn-popup hover">x</button>
  `;
}
document.addEventListener("click", (event) => {
  //console.log(event.target.parentNode);
  //console.log(event.target);
  if (POPUP.classList.contains("active")) {
    if (
      !event.target.closest(".popup") ||
      event.target.classList.contains("btn-popup")
    ) {
      body.classList.remove("no-scroll");
      //console.log(event.target.closest(".popup"));
      POPUP.classList.remove("active");
    }
  } else {
    for (let i = 0; i < CARDS.length; i++) {
      if (CARDS[i] == event.target || CARDS[i] == event.target.parentNode) {
        popupIsActive(arrCardsNumber[i]);
        POPUP.classList.add("active");
        body.classList.add("no-scroll");
      }
    }
  }
});
