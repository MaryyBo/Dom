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