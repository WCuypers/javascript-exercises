/*
const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i <= arguments.length; i++) { // !!! arguments.length is 2, en daardoor logt hij maar 2 plekken van de array
        // ^loop to go over every parameter starting from the second (the first is the array)
        let indexValue = array.indexOf(arguments[i]); // find the index of the value in array
        valueFromArray = array.splice(indexValue, 1); // cut out the array item in the place of index
    }
    return array; // return the new array
}

console.log(removeFromArray([1, 2, 3, 4], 2)); //only logs 2 values, not 3
// Do not edit below this line
// module.exports = removeFromArray;
*/


const removeFromArray = function() {
    const itemsToRemove = [];
    let originalArray = arguments[0];
        for (let i = 1; i < arguments.length; i++) { //makes a new array with all items to remove
            if (originalArray.includes(arguments[i])) {
                itemsToRemove.push(arguments[i]);
            } else {
                continue;
            }
        };
        //!!write a loops that finds every item of itemsToRemove, finds its place in originalArray and removes it
        for (const item of itemsToRemove) {
        // for each value of itemsToRemove, find its index in originalArray
        let indexValue = originalArray.indexOf(item);
        let valueFromArray = originalArray.splice (indexValue, 1);
        // use the index in originalArray to remove the item
        };
        return originalArray;
};

// V console testing
// console.log(removeFromArray([1, 2, 3, 4, 5], 2, 3));

module.exports = removeFromArray;