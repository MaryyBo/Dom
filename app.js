//https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg
//https://img.freepik.com/free-photo/bright-petals-gift-love-in-a-bouquet-generated-by-ai_188544-13370.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707696000&semt=ais


const [btn1, btn2] = document.querySelectorAll('button');

btn1.addEventListener('click',clickHandler);
btn2.addEventListener('click',clickHandler);


function clickHandler ({target}) {
 const img = target.parentNode.children[0];
 img.setAttribute ('src', target.dataset.src);


}

//Метод  setAttribute передаємо 2 значення (name, value)
// Треба достукатись до адреси картинки

