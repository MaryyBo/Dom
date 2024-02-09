

//document.querySelector - повертає 1 єдиний перший знайдений елемент(в якості селектору може бути БУДЬ_ЯКИЙ селектор)

const btn1 = document.querySelector('button'); // по тегу

// console.log(btn1);

const btn2 = document.querySelector('.super-btn') // через крапку,бо це .клас
 
// console.log(btn2);

const btn3 = document.querySelector('#btnbtn'); //по #ID

// console.log(btn3);


// document.querySelectorAll

const btnCollection = document.querySelectorAll('button'); // повертає Nodelist

// console.log(btnCollection);

// Динамічні Nodelist - якщо ми з поверненого нам масиву  щось удалимо, то і в верстці теж удалиться 
// Статичні Nodelist - можно з поверненим масивом робити що завгодно


const paragraphCollection = document.querySelectorAll('.paragraph:nth-child(even)');

for (let p of paragraphCollection) {
    p.style.color = 'red';
    p.style.backgroundColor = 'yellow';
}

// console.log(paragraphCollection);



// В DOM є методи , для зміни тексту елементу (рекомендовані, та нерекомендовані)


paragraphCollection[0].innerHTML = 'test';