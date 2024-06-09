function convertFromCelsius() {
    var celsius = parseFloat(document.querySelector('.Celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    document.querySelector('.Fahrenheit').value = fahrenheit.toFixed(2);
    document.querySelector('.Kelvin').value = kelvin.toFixed(2);
}

function convertFromFahrenheit() {
    var fahrenheit = parseFloat(document.querySelector('.Fahrenheit').value);
    var celsius = (fahrenheit - 32) * 5/9;
    var kelvin = celsius + 273.15;

    document.querySelector('.Celsius').value = celsius.toFixed(2);
    document.querySelector('.Kelvin').value = kelvin.toFixed(2);
}

function convertFromKelvin() {
    var kelvin = parseFloat(document.querySelector('.Kelvin').value);
    var celsius = kelvin - 273.15;
    var fahrenheit = (celsius * 9/5) + 32;

    document.querySelector('.Celsius').value = celsius.toFixed(2);
    document.querySelector('.Fahrenheit').value = fahrenheit.toFixed(2);
}
