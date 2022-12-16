const convertToCelsius = function(fahrenheit) {
  celsius = fahrenheit * (9/5) + 32;
  return celsius;
};

const convertToFahrenheit = function(fahrenheit) {
  fahrenheit = (celsius - 32) * (5/9);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
