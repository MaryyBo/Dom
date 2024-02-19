
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

  const input = document.querySelector('#text');
  const text = input.value;

  const li = document.createElement('li');
  li.innerHTML = text;

  const delButton = document.createElement('button');
  delButton.addEventListener('click', deleteToDoList);
  delButton.innerText = 'Delete';

  li.append(delButton);

  const ul = document.querySelector('ul');
  ul.append(li);

  input.value = '';// видалити попередньо введений текст з input
}


function deleteToDoList() {
  const liToDelete = this.parentElement;
  liToDelete.remove();
}
