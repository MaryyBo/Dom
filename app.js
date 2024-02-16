/* <article class="card-wrapper">
        <img class="card-image" src="https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="John avatar"/>
        <h2 class="user-name">John</h2>
        <p class="description"> Description of John</p>
        </article>
 */

        const sectionRoot = document.querySelector('#root');


        function createUserCard (user) {

            // 1. Створення  img
            const img = document.createElement('img');
            img.setAttribute('src', user.profilePicture);
            img.setAttribute('alt', user.name);
            img.classList.add('card-image')

            // 2. Створення h2
            const h2 = createElement('h2', {classNames: ['user-name']}, user.name);

            // 3. Створення параграфу p 
           const p = createElement('p', {classNames: ['description']}, user.description);
                
        //4.Cтворюємо і Повертаємо  article в який вкладені елементи img, h2, p
        return  createElement('article', {classNames: ['card-wrapper']}, img, h2, p);
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