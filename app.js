
 // ЗАДАЧА додому 
 /*Спробуйте створити декілька HTML елементів через JS. (document.createElement)
Спробуйте додати якісь стильові класи цим елементам. (element.classlist.add)
Спробуйте додати якийсь текстовий вузол для елементів. (  element.append('text....')  )
Причепіть створені елементи до body (  document.body.append(element)  )
*/
//https://www.poznavayka.org/wp-content/uploads/2017/07/Krasnyiy-volk.jpg

function createDiv () {
    
    const divElement = document.createElement('div');
    divElement.classList.add('div-class');

    const sectionElement = document.createElement('section');
    sectionElement.classList.add('section-class');
    divElement.append(sectionElement);
    

    const H2Element = document.createElement('h2');
    H2Element.append('Рудий вовк');
    sectionElement.append(H2Element);


    const H3Element = document.createElement('h3');
    H3Element.append('Найбільш рідкісна тварина у світі, яка незабаром може зникнути');
    sectionElement.append(H3Element);

    

    const pElement = document.createElement('p')
    pElement.append('Живе в Східній частині США. Загрозою для розмноження цього виду стали звичайні фермери. Існувало три види цих тварин, але сьогодні, на жаль, залишився тільки один. Цей вид занесений у Червону книгу. ');
    divElement.classList.add('p');
    sectionElement.append(pElement);


    const imgElement = document.createElement('img')
    imgElement.src="https://www.poznavayka.org/wp-content/uploads/2017/07/Krasnyiy-volk.jpg";

    sectionElement.append(imgElement);

    console.log(divElement);

    document.body.append(divElement);
}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv);