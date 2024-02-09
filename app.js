// console.log(this);

// alert('test'); // Це браузерна річь яка живе в об'єкті Window
// або window.alert() - одне й те саме
// document (властивість) - об'єктне уявлення вього нашого документу у якому ми зараз працюємо

// console.dir(document); // об'єктне представлення сторінки, все що є на нашй сторінці буде в нашому документі document

/* У DOCUMENT є методи:
 .getElementById (id)
 .getElementByClassName ()
 .getElementByTagName (name)

*/

/*
    З точки зору браузера всі елементи на сторінці це окремі об'єкти
Всі елементи можна підписати на події
Подія, це коли в нас на сторінці щось стається. Банальне наведення курсору, це подія це називається EventTarget

    EventTarget - великий об'єкт що містить купу інформації, куди, на якому елементі сталася подія

    EventTarget має 3 МЕТОДИ:
    1. addEventListener - дозволяє додати обробник подій , функцію, до певного елемента
    Приймає 2 параметри  .addEventListener(type, listener)


    На MDN є справочник по подіям!!!

*/

// Треба пов'язати кнопку з функцією! Треба звернутись до EventTarget 

function getAlert (){
    alert('Hello user');
}

const buttonElement = document.getElementById('btn');
// console.log(buttonElement);

buttonElement.addEventListener('click',getAlert);

//1. зареєстрували обробник події натискання миші на кнопку
//2. навісили обробник натискання миші на кнопку

/*  
    1. дати клас, id, тег елементу.(в html)
    2. прописати функцію (що буде виконуватись при клацанні мишкою на кнопку)
    3. cтворити змінну для кнопки(елементу) в якій прописати потрібний метод Document (document.getElementById('btn'))
    4. до створеної змінної buttonElement приміняємо метод .addEventListener(type, listener)

*/
