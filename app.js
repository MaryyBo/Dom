/*
1.Маємо div
2.Дві кнопки: на одній написано "Зроби червоним" на другій - "Зроби зеленим"
3.За натисненням на кнопку , фоновий колір div з пункту 1 має змінитися на відповідний колір, вказаний на кнопці.

*/

const div = document.querySelector('#box');

// console.log(div.classList);
// div.classList.remove('bg-color-red')
// console.log(div.classList); // пустий classList після .remove

const [red, green] = document.querySelectorAll('.btn'); // отримали грубо кажучи масив з двух елементів, 2 кнопки
// деструктуризуємо

red.addEventListener('click', redBtnHandler);

function redBtnHandler (event) {
    // div.style.backgroundColor = 'red';
    div.classList.toggle('bg-color-red'); // автоматично підключаємо стилі

}


green.addEventListener('click', greenBtnHandler);

function greenBtnHandler (event) {
    // div.style.backgroundColor = 'green';
    div.classList.toggle('bg-color-green');

}
