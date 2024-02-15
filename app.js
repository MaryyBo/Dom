/* <article class="card-wrapper">
        <img class="card-image" src="https://img-forum-wt-ru.cdn.gaijin.net/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg" alt="John avatar"/>
        <h2 class="user-name">John</h2>
        <p class="description"> Description of John</p>
        </article>
 */

       

        const sectionRoot = document.querySelector('#root');


        function createUserCard (user) {
            // 1. Створення  article
            const article = document.createElement('article');
            article.classList.add('card-wrapper');

            // 2. Створення  img
            const img = document.createElement('img');
            img.setAttribute('src', user.profilePicture);
            img.setAttribute('alt', user.name);
            img.classList.add('card-image')

            // 3. Створення h2
            const h2 = document.createElement('h2');
            h2.append(user.name);
            h2.classList.add('user-name')

            // 4. Створення параграфу p 
           const p = document.createElement('p');
           p.append(user.description);
           p.classList.add('description')

           // 5. Доєднати до article елементи img, h2, p
           article.append(img, h2, p);

        //    //6. Приєднати  article до section 
        //    sectionRoot.append(article);
                
        //6. Повертає article
        return article

        }

        const cardArray = data.map(user => createUserCard (user));

     sectionRoot.append(...cardArray);