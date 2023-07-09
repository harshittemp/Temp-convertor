const celciusInput= document.querySelector('#celcius > input');
const fahrenhiteInput= document.querySelector('#fahrenhite > input');
const kelvinInput= document.querySelector('#kelvin > input');


function celciusToFahrenheitAndKelvin(){
    const cTemp=parseFloat(celciusInput.value);
    const fTemp=(cTemp*(9/5))+32;
    const kTemp=cTemp+273.15;
    fahrenhiteInput.value=(fTemp);
    kelvinInput.value=(kTemp);

}
function fahrenheitToCelciusAndKelvin(){
    const fTemp=parseFloat(fahrenhiteInput.value);
    const cTemp=(fTemp-32)*(5/9);
    const kTemp=(fTemp+459.67)*(5/9);
    celciusInput.value=(cTemp);
    kelvinInput.value=(kTemp);

}

function kelvinToCelciusAndfahrenheit(){
    const kTemp=parseFloat(kelvinInput.value);
    const cTemp=(kTemp-273.15);
    const fTemp=(9/5)*(kTemp-273)+32;
    celciusInput.value=(cTemp);
    fahrenhiteInput.value=(kTemp);

}
function main(){
celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenhiteInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndfahrenheit);
}
main();