/* ЗАДАЧА : створити конвертер валют

Декомпозиція:

1. HTML сторінка з формою що містить 2 поля вводу:
- одне поле - введення суми в одній валюті
- інше поле - вибір валюти в яку ми будемо цю сумму конвертувати

2. Додати в форму кнопку "Конвертувати"

3. Написати функцію (js обробник події відправки форми)
- отримати значення веденої суми та обробної валюти за допомогою "value"
- обчислити конвертовану суму, помноживши введену користувачем суму на курс обміну вибраної користувачем валюти
- вивести результат (десь на сторінці) для відображення результат (innerHTML)

4.Підписати форму на подію "submit", в якості listener використати функцію з пункту 3

*/

const CURRENCY = { // В об'єкті зберігаємо значення курсу валют
    USD_TO_UAH: 37.65,
    EUR_TO_UAH: 40.61
}

const converterForm = document.querySelector('#currency-converter-form');

converterForm.addEventListener('submit', converHandler);

function converHandler(event) {
    event.preventDefault();

   const amount = Number(document.querySelector('#amount').value); // все, що ми отримаємо з input це рядок, і треба перетворити значення з snput  на number конструктом
   const currency = document.querySelector('#currency').value;
   
   let convertedAmount;

   const {USD_TO_UAH: usdCourse, EUR_TO_UAH: euroCourse} = CURRENCY;

   switch (currency) {
    case 'USD': {
        convertedAmount = amount * usdCourse;
        break;
    }
    case 'EUR': {
        convertedAmount = amount * euroCourse;
        break;
    }
    default: throw new Error ('Something goes wrong...');
}

//    if(currency === 'USD' ) {
//     convertedAmount = amount * usdCourse;
//    } else if (currency === 'EUR') {
//     convertedAmount = amount * euroCourse;
//    } else {
//     throw new Error ('Something goes wrong...') 
//    } // помилка не обов'язкова, але можна додати 

   const resultDiv = document.querySelector('#result');

   resultDiv.innerHTML = `${amount} <b>${currency}</b> = ${convertedAmount.toFixed(2)} UAH`
}