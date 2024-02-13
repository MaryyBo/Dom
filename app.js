
const button = document.querySelector('button');

button.addEventListener('click',clickHandler );

function clickHandler ({target}) {
    target.disabled = true; // відключить ПОВНІСТЮ кнопку після 1 натиску
}

// target - ми витягли {} з event деструктурували, працює так само, як би ми там записали event