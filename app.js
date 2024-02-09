const collection = document.getElementsByClassName('paragraph');

// for (let i= 0; i< collection.length; i++) {
//     collection[i].style.color = 'green';
// }

// АБО через  for...of - перебирає об'єкт по ключам

for( let p of collection) { //  p це - paragraph, нова змінна коротка р
    p.style.color = 'green'
}


const btns = document.getElementsByTagName('button');

// const arr = [...btns]; // розпиляємо...
// // console.log(arr); // можна створити повноцінний масив методом Array.from або через spread оператор...

// arr.forEach((button) => {
//     button.style.color = 'red';
// }) 
// Але не обов'язково перетворювати на реальний масив

for( let button of btns) { 
    button.style.color = 'red'
} // зробили кнопки червоними через цикл 


function hello (event) {
    console.log('Hello user'); 
    event.target.removeEventListener('click', hello);//removeEventListener - для того, щоб відписати від події click! На кнопку можна натиснути тільки 1 раз!
}

// коли кнопок НЕ 1, а 3 треба пройтись ЦИКЛОМ! щоб якось їх змінити 

for (let btn of btns) { // Запускається цикл на коллекції btns - колекція кнопок їх 3
    btn.addEventListener('click', hello); // let btn - це просто нова змінна, можна назвати як завгодно
}