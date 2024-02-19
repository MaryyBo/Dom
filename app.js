
/*ДЗ
1. Зробити інпут для вводу тексту
2. Зробити кнопку, яка по натисненю, текст з інпута перетворює на елемент списку

<form>
    <input type="text" />
    <button>Click to add</button>
</form>

<ul>
    <li>Зробити щось одне</li>
    <li>Зробити щось інше</li>
</ul>

До кожного li приєднати кнопку, за допомогою якої елемент зі списку можна видалити
*/


const buttonToDo = document.querySelector('button');
buttonToDo.addEventListener('click', addToDoList)


function addToDoList(event) {
  event.preventDefault();

   // Отримання значення з інпута
  const input = document.querySelector('#text');
  const text = input.value.trim(); //value - це те, що вводять в input - текст
  console.log(input.value);

  // Створення нового елементу списку
  const li = document.createElement('li');
  li.innerHTML = text;

  const delButton = document.createElement('button');
  delButton.addEventListener('click', deleteToDoList);
  delButton.innerText = 'Delete';
  delButton.classList.add('remove-btn');

  // Додавання кнопки видалення до елементу списку
  li.append(delButton);

  // Отримання посилання на список і додавання нового елементу
  const ul = document.querySelector('ul');
  ul.append(li);

  input.value = '';// видалити попередньо введений текст з input
  
  console.dir(this);
}

// 1 Variant

// function deleteToDoList() {
//   // const liToDelete = this.parentElement;
//   // liToDelete.remove();
//   this.parentNode.remove();  
//   console.dir(this); 
//   // this вказує на кнопку видалення, parentNode вказує на батьківський елемент (<li>)
// }

// 2 Variant

function deleteToDoList({target: {parentNode}}) {
  parentNode.remove();
}



/* 
Якщо ви викликаєте console.dir(this) всередині функції addToDoList, ви можете побачити в консолі об'єкт,
 який представляє елемент, на якому відбувається подія, і дізнатися більше про його властивості та методи.

*/





