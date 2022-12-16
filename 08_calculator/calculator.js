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
  };
  return result;
};

const multiply = function(multArray) {
  let result = 1;
  for (const value of multArray) {
    result *= value;
  }
  return result;
};

const power = function(num1, num2) {
	result = Math.pow(num1, num2);
  return result;
};

const factorial = function(num) {
	if (num == 0) {
    result = 1;
  } else {
    while (num >= 1) {
      result *= num;
      num--;
    }
  }
  return result;
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
