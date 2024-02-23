function loadImage (src) {
    // 1. Створюємо саму картинку
    const img = document.createElement('img');
    img.setAttribute('src', src);

    // 2. Створюємо елемент у верстці що вкаже, чи вантажимо ми щось чи ні 
    const h2 = document.createElement('h2');
    h2.id = 'loading-h2'   // видаємо id
    h2.append('Loading image...') // додаємо текстовий вузол
    document.body.append(h2); // відображаємо поки грузиться картинка смс "Loading image..."

   


    // 3. Повертаємо promise
    return new Promise ((resolve, reject) => {
        // 3. Створюємо setTimeout
      const timeOutId = setTimeout (() => {
            reject ('Image can`t be loaded')
        }, 5000)

        // Підписуємо свторену картинку на подію load
        // Якщо картина завантажеться  - ми резолвимо проміс з елементом картинки
        img.addEventListener('load', () => {
            clearTimeout(timeOutId);
            resolve(img);
        })
        // Підписуємо свторену картинку на подію error
        // Якщо картина HE завантажеться  - ми реджектимо з повідомлення про помилку
        img.addEventListener('error', () => {
            clearTimeout(timeOutId);
            reject('Image can`t be loaded');
        })
    })


}

loadImage('https://masterpiecer-images.s3.yandex.net/5377dfff87a111ee99d3ca123cab517e:upscaled')
.then ((img) => {
    document.body.append(img);

}, (errorMessage) => {
    const h2 = document.createElement('h2');
    h2.append(errorMessage);
    document.body.append(h2);
})
.finally (() => {
    const loadingH2 = document.querySelector('#loading-h2')
    loadingH2.remove();
})