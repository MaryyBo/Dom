// date-* атрибути наприклад <button data-color="red">Red</button>

const buttons = document.querySelectorAll('button');

const div = document.querySelector('#root');

console.dir(buttons);

// for(let i=0; i< buttons.length; i++) {
//     buttons[i].addEventListener('click', clickHandler);
// }

for (let btn of buttons) {
    btn.addEventListener('click',clickHandler)
}

function clickHandler ({target: {dataset: {color}, parentNode}}) {
    // const {dataset: {color}} = target;
    // const {parentNode} = target;

    parentNode.style.backgroundColor = color;
    
    // div.style.backgroundColor = color;
}