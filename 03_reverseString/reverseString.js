const reverseString = function(string) {
    stringArray = string.split("");
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    console.log(reversedString);
};

// Do not edit below this line
module.exports = reverseString;
