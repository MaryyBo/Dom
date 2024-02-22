// Promise - Це звичайний об'єкт.

const p = new Promise(executor); // записали в змінну - р в статусі pending

function executor (resolve, reject) { // пояснюємо коли проміс має перейти в статус resolve або reject
    // Задача: Згенерувати випадкове ціле число в діапазонні від 0 до 15;
    const number = Math.floor(Math.random()* 15);

    //Якщо число кратне 2 -> resolve проміс та повертаємо це число
    //Якщо число НЕ кратне 2 -> reject проміс та повертаємо помилку

    if (number % 2 === 0) {
        resolve(number); fulfilled
    } else {
        const err = new RangeError (`Error happened ${number}`);
        reject (err);
    }
  
}

p.then((number) => {
    console.log(number);
}, (err) => {
    console.log(err);
} ) // 2 колбек : 1 попадає в resolve, 2 попадає в reject

