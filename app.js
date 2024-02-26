/* 

async
await     - скорочуємо код з допомогою цих слів

*/

const URL = 'https://randomuser.me/api';

function loadDataWithoutAsync(url) {
    const p = fetch(url);
    const jsonResponse = p.then((response) => {
        return response.json();
    })
    jsonResponse.then((data) => {
        console.log(data);
    })
}

// loadDataWithoutAsync (URL);// виклик звичайної функції

// Створення ASYNC / AWAIT FUNCTION (коротший синтаксис)

async function loadDataAsync(url) {
    const p = fetch(url);
    const response = await p;
    const data = await response.json();
    console.log(data);
}

loadDataAsync(URL);