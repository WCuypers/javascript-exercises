const convertToCelsius = function(fahrenheit) {
  celsius = (5 / 9) * (fahrenheit - 32);
  return Math.round(celsius);
};

const convertToFahrenheit = function(fahrenheit) {
  fahrenheit = celsius * 1.8 + 32;
  return Math.round(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
