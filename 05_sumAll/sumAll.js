const sumAll = function(num1, num2) {
    let result;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            result += i;
        }        
    } else if (num2 > num1) {
        for (let i = num2; i<= num1; i++) {
            result += i;
        }
    } else {
        result = num1 = num2;
    };
    return result;
};

// Do not edit below this line
module.exports = sumAll;
