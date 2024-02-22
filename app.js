// Fetch API - інтерфейс для отримання ресурсів

// const p = fetch('./user.json'); // p = promise

// const jsonPromise = p.then ((response) => {  // response - це екземляр спец об'єкту, вбудований,  зі своїми властивостями і методами
//     return response.json(); //Перетворюємо 0 та 1 на JS об'єкт
// })

// //Записали return response.json(); в окрему змінну const jsonPromise 

// jsonPromise.then ((data) => {
//     console.log(data);
// })


// Можемо спростити з допомогою chaining

// const p = fetch('./user.json').then ((response) => {  // response - це екземляр спец об'єкту, вбудований,  зі своїми властивостями і методами
//     return response.json(); 
// }).then ((data) => {
//     console.log(data);
// })


//https://api.monobank.ua/bank/currency
//https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5


fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5').then ((response) => {  
    return response.json(); 
}).then ((data) => {
    console.log(data);
})