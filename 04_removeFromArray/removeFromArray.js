const removeFromArray = function(array, value) {
    let indexValue = array.indexOf(value); // find the index of value in array
    valueFromArray = array.splice(indexValue, 1); // cut out the array item in the place of index
    return array; // return the new array
};

// Do not edit below this line
module.exports = removeFromArray;
