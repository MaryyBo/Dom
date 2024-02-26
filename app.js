/*

https://api.openweathermap.org/data/2.5/weather?q=Dnipro&appid=f7c576ba3699bdd0b98ddcf196639992&units=metric

code - f7c576ba3699bdd0b98ddcf196639992
*/

/*Задача: зробити погодний віджет

 Алгоритм вирішення:

1. Зробити верстку елементів, які отримують від користувача дані про місто
2. Отримати дані з APIі обробити іх ( підготувати дані для відмалювання у верстці)
3. Зробити картку з погодою і відобразити її.

*/

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');
btn.addEventListener('click', buttonlickHandler);

function buttonlickHandler({ target }) {
    const selectValue = target.previousElementSibling.value;
    requestAPI(selectValue);
}

function requestAPI(cityName) {
    //1. Готуємо URL 
    const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}&units=metric`
    console.log(url)
    //2. Робимо запит 
    fetch(url)
        .then((response) => {
            return response.json() // преобразовуєм 0 та 1 в JS
        })
        .then((data) => {
            //3. Відмальовуємо погоду

            previousWidgetRemove();// Функція видалення попереднього віджета

            displayWeather(data);
        })}
        

/*<article class="weather">
<p>City name: Kyiv</p>
<p>Temperature: 7°C</p>
<p>Weather description: overcast clouds</p>
</article>
*/

function displayWeather(weatherObject) {
    const { name, main: { temp }, weather: [{ description }] } = weatherObject;

    
    const article = document.querySelector('#weather-box');
    article.classList.add('weather-display');
    
    const city = document.querySelector('#city');
    city.textContent = name;

    const temperature = document.querySelector('#temp');
    temperature.textContent = `${temp}°C`;

    const desc = document.querySelector('#description');
    desc.textContent = description;
}

//     //1.Створємо article
//     const article = document.createElement('article')
//     article.classList.add('weather')

//     //2.Створємо параграф з назвою міста
//     const cityName = document.createElement('p');
//     cityName.append(`City name:${name}`);

//     //3.Створємо параграф з температурою
//     const temperature = document.createElement('p');
//     temperature.append(`Temperature:${temp}°C`);

//     //4.Створємо параграф з описом погоди
//     const weatherDescription = document.createElement('p');
//     weatherDescription.append(`Weather description: ${description}`);

//     //5. До article чіпляємо параграфи з пунктів 2-4
//     article.append(cityName, temperature, weatherDescription);

//     //5. Знаходимо section і чіпляємо до неї article
//     const section = document.querySelector('.wrapper');

//     section.append(article);
// }


function previousWidgetRemove() {
    // Треба знайти раніше створений віджет і видалити його перед тим як створити новий
    const previousWidget = document.querySelector('.weather');
    previousWidget.remove();
}