 


 function createDiv () {
    const div = document.createElement('div');// створюємо елемент у пам'яті
    div.classList.add('box') //  підєднали клас .box зі стилів
    div.append('Hello world'); // приєднуємо текстовий вузол
    console.log(div);
    
     document.body.append(div); // динамічно додали до HTML
 }

 /* 
 <body> 
 <div class ="box"> Helloworld </div>
  </body> 
 */

 const btn = document.querySelector('button');

 btn.addEventListener('click',createDiv );
  
 // element.append 
 // document.createElement
 // classList.add

 // ЗАДАЧА додому 
 /*Спробуйте створити декілька HTML елементів через JS. (document.createElement)
Спробуйте додати якісь стильові класи цим елементам. (element.classlist.add)
Спробуйте додати якийсь текстовий вузол для елементів. (  element.append('text....')  )
Причепіть створені елементи до body (  document.body.append(element)  )
*/