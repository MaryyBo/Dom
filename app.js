const user = {
    firstName: 'John',
    lastName:'Doe',
    age: 45,
    footSize: 45
}

// JSON
// Весь обєкт JSON передаєтьсяя як один рядок
// stringify - перетворює JS об'єкт в JSON
// parse - перетворює  JSON в S об'єкт 


const jsonString = JSON.stringify(user)
// '{"firstName":"John","lastName":"Doe","age":45,"footSize":45}

// і навпаки 

/*JSON.parse(jsonString)

{firstName: 'John', 
lastName: 'Doe', 
age: 45, 
footSize: 45}
*/

// Функції в JSON будуть ігноруватись

// Серіалізація - процес перетворення JS об'єктів в JSON - метод stringify
// Десеріалізація - процес перетворення JSON об'єктів в JS (навпаки) - метод parse

// Поверхневі копії oб'єкту (shallow copy) - копія , де копіюються тільки посилання на елементи , а не самі значення (зміни внесені в оригінальний об'єкт відобразяться в поверхневій копії і навпаки)

const originalObject = {
    users : [
        {
            name: 'John',
            age: 25,
        },{
            name: 'Lucky',
            age: 33,
        }
    ]
}

// можем створити поверхневу копію  з допомогою спред оператору

const shallowCopy = {...originalObject}

//Глибока копія (deep copy) - створення повноцінної копії, де копіюються як посилання, так і самі значення 
//Щоб створити глибоку копію, потрібен JSON

const deepCopy = JSON.parse(JSON.stringify(originalObject));

