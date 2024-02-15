
 /*

 Дано:
 - секція , на якій треба клацати мишею
 - дів, який має переміститись на точку куди клацнуть
 */


 const field = document.querySelector('#game-field');
 const box = document.querySelector('#box');
 console.dir(box);

 field.addEventListener('click', clickHandler); // {capture: true} -  обробник події буде запускатися не на фазі сплиття а занурення, для того щоб потім реалізувати логіку- event.stopPropagation()

 function clickHandler(event) {
    // console.log(event); // client X та clientY це місце де клікають мишкою
    // target- на якому елементі відбулась подія
    // currentTarget - якому елементу належав обробник події

    // якщо ми натискаємо не на ігрове поле, а на квадратик, то переміщення не буде!
    // event.stopPropagation();

     if (event.currentTarget === event.target) { // якщо ми натискаємо на ігрове поле то ми маємо отримати переміщення квадратика
        const {target: {children: {box}}, clientX, clientY} = event;
// const {children: {box}} = target; // треба витягати значення, а не брати його з глобальної обаласті видимості


    box.style.top = `${clientY}px`;
    box.style.left = `${clientX}px`;
     }
 }

      /*
       top: 0; - ось y;
       left: 0; -  ось x;
 */