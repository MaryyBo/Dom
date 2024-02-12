const converterForm = document.querySelector('#temperature-converter-form')

converterForm.addEventListener('submit', convertHandler )

function convertHandler (event){
    event.preventDefault();
    const temperatureInput = Number((document.querySelector('#temperature').value));
    const farenheit = (temperatureInput * 9 / 5) + 32;

    document.querySelector('#result').innerHTML = `${temperatureInput} C = ${farenheit} F`
}
