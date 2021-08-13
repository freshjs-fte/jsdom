/* 
    innerText vs textContent
    Choose - textContent
 */
// document.body.textContent = "test";


/* innerHTML */
// document.body.innerHTML = "<div>test text</div>";


/* getElementById */
// document.body.innerHTML = "<div id=\"root\"></div>";
// const elem = document.getElementById("root");

// const elem = document.getElementById("first");
// console.dir(elem);
// elem.innerHTML = "<input>";

/* getElementsByClassName */

const elemsClass = document.getElementsByClassName("second");
const array = Array.from(elemsClass);
// console.log(array);

// const lastDeleted = array.pop();
// console.dir(lastDeleted);
// console.log(array);

/* 
    Создайте 3+ элемента с классом
    Достаньте массив этих элементов из JS
    выведите в консоль один эл из середины массива
    console.dir( array[3] )
    
    *выведите каждый элемент в консоль с новой строки
    используя один console.log( array.join("\n") )
*/
// console.log( array.join("\n") )


/* getEleme */
const elemsSelector = document.querySelectorAll("div");

console.log(elemsSelector)
