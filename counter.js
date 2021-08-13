let counterNumber = 0;

const counterDisplay = document.querySelector("#counterDisplay");

function displayNumber(addClass) {
  let { style, classList } = counterDisplay;

  if (counterNumber === 0) {
    style.border = "3px solid black";
  } else {
    /* 
        1) создать классы для зеленого и красного состояния дисплея
        2) добавлять или заменять css класс диплея
        с помощью classList add или replace или remove
    */
  }

  console.log(classList);
    classList.add("newClassName", "myClass")
    classList.replace("что заменить", "на что заменить")

  // деструктуризация:

  // если конечная переменная - обьект
  // то можно изменять содержимое, т.к обьект это ссылка

  // если конечная переменная - примитив,
  // то значения только для чтения

  /* 
    style.border = "3px solid " + borderColor;
    style.backgroundColor = backgroundColor;
  } */

  counterDisplay.textContent = counterNumber;
}

function addOne() {
  // +1
  counterNumber++;
  console.log(counterNumber);

  displayNumber("green", "#00ff00");
}

function decrementOne() {
  // -1
  counterNumber--;
  console.log(counterNumber);

  displayNumber("#aa0000", "#ff0000");
}

function addUserNumber() {
  // 2)
  const addNum = prompt("Ввекдите ваше число");

  // 3)
  counterNumber += Number(addNum);
  console.log(counterNumber);
  displayNumber();
}

function resetCounter() {
  counterNumber = 0;
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
