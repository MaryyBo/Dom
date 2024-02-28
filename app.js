/*

Задача 1

У вас є сторінка.
На сторінці є кнопка "підвантажити юзера".
При натисненні на цю кнопку, на сторінку має додатися картка юзера.

Картка може містити:
- аватарка
- ім'я, прізвище
- імейл
- адреса
- день народження

https://randomuser.me/api
*/

const API_BASE = 'https://randomuser.me/api';

const button = document.querySelector('#addUserCard');
button.addEventListener('click', apiRequest);


function apiRequest() {
  fetch(API_BASE)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
      displayUser(data);
    })
}


const divWrapper = document.createElement('div'); // загальний <div> до якого потім будуть appendитись sections з картками
divWrapper.classList.add('div-wrapper');
document.body.append(divWrapper); // appendимо до BODY і в стилях налаштовуємо так, як хочемо щоб відображались картки(section)


function displayUser(userObject) {

  const { name, email, location, dob, picture } = userObject.results[0];
  const fullName = `${name.first} ${name.last}`;
  // console.log(fullName);

  const userCardContainer = document.createElement('section');
  userCardContainer.classList.add('user-card');

  const avatar = document.createElement('img');
  avatar.setAttribute('src', picture.large);
  avatar.setAttribute('alt', fullName);
  avatar.classList.add('card-image')


  const  userName = document.createElement('p');
  userName.append(`Name: ${name.first}`);

  const userSurname = document.createElement('p');
  userSurname.append(`Surname: ${name.last}`);

  const emailElem = document.createElement('p');
  emailElem.append(`Email: ${email}`);

  const locationElem = document.createElement('p');
  locationElem.append(`Location: ${location.country}`);

  const birthDate = document.createElement('p');
  birthDate.append(`Age: ${dob.age}`);



  userCardContainer.append(avatar, userName, userSurname, birthDate, locationElem, emailElem);

  divWrapper.appendChild(userCardContainer);

}







