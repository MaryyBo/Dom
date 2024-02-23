const p = new Promise(executor); // pending 

function executor(resolve, reject)  {
    setTimeout(() => {
        resolve('It time'); //а через 15сек переходить в статус fulfilled
    }, 15000)
}
const h1 = document.querySelector('#root');

p.then((str) => {
    h1.append(str);
});