
const form = document.getElementById('name-form');

form.addEventListener('submit',consoleForm);

function consoleForm (event) { 
    event.preventDefault();// не роби так, як ти робиш зазвичай! В даному випадку не перезавантажуй сторінку після відправки даних, що ми побачили що в консолі!

    const form = event.target;
    console.dir(event.target);

    const value = form[0].value;
    console.log(value); // має власитивість value з іменем або даними, які ввели "dddd"
}

/* ЗАДАЧА

Створити форму в HTML
В формі запитувати ім'я користувача

При відправленні форми - привітайте користувача ("привіт ім'я користувача")
Ім'я користувача візьміть з інпуту форми

*/ 

const formName = document.getElementById('name-user');

formName.addEventListener('submit', consoleFormName);

function consoleFormName(event) {
  event.preventDefault();

  const formName = event.target;
  const value = formName[0].value;
  console.log(`Привіт ${value}` );
}

