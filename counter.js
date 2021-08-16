let counterNumber = 0;
const arrayImgs = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1518568740560-333139a27e72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG92ZSUyMHN0b3J5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
  "asd",
  "asd"
];

const counterDisplay = document.querySelector("#sliderDisplay");

const changeSlide = function (event) {
  // console.log(event.target)
  console.log(event.target.id);
  counterNumber = Number(2);
};

counterDisplay.onclick = changeSlide;

const slide = function (slideIndex) {
  counterNumber = Number(slideIndex);
  displayNumber()
};

const circles = document.querySelector(".slides-circles")
let str = ''
for(let i = 0; i < arrayImgs.length; i++) {
  str += `<div class="circle" onclick="slide(${i})"></div>`
}
console.log(str);
circles.innerHTML = str
/* 
1) let i = 0
2) i < 1 (0 <= 1) // true
3) {...}
4) i++
5) i < 1 (1 <= 1) // true
3) {...}
4) i++
5) i < 1 (2 <= 1) // false
*/


function displayNumber(addClass) {
  // деструктуризация:

  // если конечная переменная - обьект
  // то можно изменять содержимое, т.к обьект это ссылка
  // если конечная переменная - примитив,
  // то значения только для чтения
  let { classList } = counterDisplay;

  if (counterNumber === 0) {
    classList.remove("displayRed", "displayGreen");
  } else {
    /* 
        1) создать классы для зеленого и красного состояния дисплея
        2) добавлять или заменять css класс диплея
        с помощью classList add или replace или remove
    */

    if (addClass === "displayGreen") {
      classList.remove("displayRed");
      classList.add("displayGreen");
    } else {
      classList.remove("displayGreen");
      classList.add("displayRed");
    }
  }

  if (counterNumber < 0) {
    counterNumber = arrayImgs.length - 1;
  }

  const result = counterNumber % arrayImgs.length;
  console.log(counterNumber, result);
  counterDisplay.src = arrayImgs[result];
}

function addOne() {
  // +1
  counterNumber++;
  // console.log(counterNumber);

  displayNumber("displayGreen");
}

function decrementOne() {
  // -1
  counterNumber--;
  // console.log(counterNumber);

  displayNumber("displayRed");
}

function addUserNumber() {
  // 2)
  const addNum = prompt("Ввекдите ваше число");

  // 3)
  counterNumber += Number(addNum);
  console.log(counterNumber);
  displayNumber();
}

/* 
    При загрузке страницы отобразить состояние счетчика
*/
displayNumber();

/* 
    Добавить новую кнопку для функции
    Создать функцию которая будет:
    2) Спрашивать число addNum у пользователя через prompt
      Преобразовывать ввод вользователя в число
    3) Добавлять по addNum ед к счетчику
    
*/
