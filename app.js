/*<<article class="card-wrapper">
<div class="image-wrapper">
<img class="card-image" src="https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="John avatar"/>
</div>
<h2 class="user-name">John</h2>
<p class="description"> Description of John</p>
</article> -->
*/

        const sectionRoot = document.querySelector('#root');


        function createUserCard (user) {

         //1. Створюємо обгортку для картинки
        const imgWrapper =  createImageWrapper (user);

            // 2. Створення h2
            const h2 = createElement('h2', {classNames: ['user-name']}, user.name);

            // 3. Створення параграфу p 
           const p = createElement('p', {classNames: ['description']}, user.description);
                
        //4.Cтворюємо і Повертаємо  article в який вкладені елементи img, h2, p
        return  createElement('article', {classNames: ['card-wrapper']}, imgWrapper, h2, p);
        }

        const cardArray = data.map(user => createUserCard (user));

        sectionRoot.append(...cardArray);

     /*Рефакторинг коду  - переробка коду, переписування коду, 
     щоб спростити його розуміння, при цьому не змінюючи логіку.
     Кусок коду (100 рядків) наприклад, переписали 5-10 строчок, перевіряємо знову чи все нормально. 
     Ціль - спростити код. Треба відрізняти і не плутати з Оптимізацією производительности(тут код стає складнішим)
     */

     /**
     @param {String} type - тег елемента, який нам треба створити
     @param {String} classNamdes - список класів, які треба додати до елемента
     @param {...Node} childNodes - список дочірніх вузлів
     @returns {HTMLElement}
     */

     function createElement (type,{classNames}, ...childNodes) {
      const elem = document.createElement(type);
      elem.classList.add(...classNames);
      elem.append(...childNodes);

      return elem;
     }

     function imgLoadHandler ({target}) {
      console.log('image succesfully load');
     const parentWrapper =  document.querySelector(`#wrapper${target.dataset.id}` )
      parentWrapper.append(target);
     }

   function imgErrorHandler ({target}) {
      target.remove();
      console.log('image loading has error');
      
     }

     function createUserImage (user) {
      const img = document.createElement('img');
      img.setAttribute('src', user.profilePicture);
      img.setAttribute('alt', user.name);

      img.dataset.id = user.id;

      img.classList.add('card-image');

      img.addEventListener('load',imgLoadHandler);
      img.addEventListener('error', imgErrorHandler )

      return img;
     }


     function createImageWrapper (user) {
      //1. Cтворення заглушки
      const imgWrapper = createElement('div', {classNames: ['image-wrapper']});
      imgWrapper.setAttribute('id', `wrapper${user.id}`);
      console.log()

      //2. Визначаємо background колор заглушки з урахуванням імені користувача
      imgWrapper.style.backgroundColor = stringToColour(user.name);
         
      //3. Створення  img
       const img = createUserImage(user);
       return imgWrapper;
     }

    function stringToColour (str) {
      let hash = 0;
      str.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
      })
      let colour = '#'
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        colour += value.toString(16).padStart(2, '0')
      }
      return colour
    }