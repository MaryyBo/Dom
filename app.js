function getAlert (event){
    // console.log(event);
    const btn = event.target; // ми заходимо в об'єкт event і дістаємо target
   

    if (btn.style.backgroundColor === 'red') {
        btn.style.backgroundColor = 'unset';
    } else {
        btn.style.backgroundColor = 'red'
    }
}

const buttonElement = document.getElementById('btn');
// console.log(buttonElement);

buttonElement.addEventListener('click',getAlert);