
/*  ЗАДАЧА

    1.зробити кнопку, додати їй ID 
    2.Напишіть функцію , яка виводить в консоль "привіт"
    3.Навісити обробку події наведення миші на цю кнопку

*/

function consoleHello () {
    console.log('привіт');
}

const newBtn = document.getElementById('button'); //у змінній ми зберігаємо посилання на нашу кнопку

newBtn.addEventListener('mouseover',consoleHello);