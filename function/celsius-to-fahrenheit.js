// Write a function to convert temperature in celsius to fahrenheit. Take celsius value as a parameter.
// Formula: F =  (celsius in degree * 1.8) + 32

function celsiusTofahrenheit(celsiusValue) {
    let fahrenheitValue = ( celsiusValue * 1.8 ) + 32;
    console.log("Fahrenheit value of ", celsiusValue, "is: ", Math.round(fahrenheitValue));
}

let temperatureIncelsius = 28;
celsiusTofahrenheit(temperatureIncelsius);