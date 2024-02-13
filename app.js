


const button = document.querySelector('button');
const div = document.querySelector('#root');



function eventHandlerButton (event) {
    console.log('Hi from button handler');
    
}

const eventHandlerBody = (event) => {
    console.log('Hi from body handler');
    event.stopPropagation();             //  event.stopPropagation();  далі нічого не піде, кнопка зупиниться на body
    // console.dir(event.currentTarget);
    console.log(this);
    
    // в середині Function Declaration та Function Expression - this буде --> body
    // коли ж ми кажемо за Arrow Function, то в неї немає this, і this буде --> Window
}

button.addEventListener('click', eventHandlerButton, {capture: true});
// div.addEventListener('click', eventHandler, {capture: true});
document.body.addEventListener('click', eventHandlerBody, {capture: true});
// window.addEventListener('click', eventHandler,{capture: true});

