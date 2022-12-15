const removeFromArray = function() {
    let indexValue = arguments[0].indexOf(arguments[1]); // find the index of arguments[1] in array
    valueFromArray = arguments[0].splice(indexValue, 1); // cut out the array item in the place of index
    return arguments[0]; // return the new array
};

// Do not edit below this line
module.exports = removeFromArray;
