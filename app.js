/* ЗАДАЧА
    При навееденні на кнопку "Ні" потрібно її приховати (display: none)
*/


// 1. Cпочатку кнопку треба знайти вводимо document і створюємо змінну
const noBtn = document.getElementById('no-btn');

// const noBtn = $('#no-btn')

// 2. Зробити обробник події

function hideBtn (event) { // в event буде target
   
    console.log(event.target);
    const btn = event.target; // кнопка на якій спрацювала подія
    btn.style.display = 'none';
    // console.log('test');

    // event.target.removeEventListener('mouseenter', hideBtn);
    
} //  Якщо потрібно , щоб кнопка була одноразовою

noBtn.addEventListener('mouseenter', hideBtn);

/* 

За правилом хорошого тону, при скриванні кнопку як в даному випадку, 
краще так не робити, тому що addEventListener всеодно існує, і нам
краще видалити цей addEventListener саме це і робить метод 

- .removeEventListener (type, listener)

*/

