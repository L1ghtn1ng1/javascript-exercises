const convertToCelsius = function(farhenheit) {
  let celsius = (farhenheit - 32) * 5/9;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celcius) {
  let farhenheit = (celcius * 9/5) + 32;
  farhenheit = Math.round(farhenheit * 10) / 10;
  return farhenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
