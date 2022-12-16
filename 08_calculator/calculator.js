const add = function(num1, num2) {
  result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(sumArray) {
  let result = 0;
  for (const value of sumArray) {
    result += value;
  }
  return result;
};

const multiply = function(multArray) {
  let result = multArray[0];
  for (let i = 1; i <= multArray.lentgh; i++) {
    result = multArray[i] * result;
  }
  return result;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
