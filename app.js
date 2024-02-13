

/*
ЗАДАЧА: Створити кнопку , яка змінює тему сайту (HTML)
Якщо ви натискаєте на цю кнопку , на сайті вмикається темний режим
(для тегу body встановіть темний колір)
(для тексту (в темному режимі) втсановіть колір white)

Якщо наискаєте на цю кнопку ще раз, на сайті вимикається темний режим (toggle)
*/


const themeToggleBtn = document.querySelector('#theme-toggle');

const body = document.querySelector('body');
// const body = document.body; // короткий запис, працює лише з тегом body

themeToggleBtn.addEventListener('click', toggleTheme)


function toggleTheme (event) {
    body.classList.toggle('dark-theme');
}