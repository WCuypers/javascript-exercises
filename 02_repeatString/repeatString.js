const repeatString = function(string, num) {
    let repeatedString = string;
    for (let i = 1; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
