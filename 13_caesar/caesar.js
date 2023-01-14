const caesar = function(string, number) {
    let stringArray = string.split("");                         //Turn string into array
    for (let i = 0; i < stringArray.length; i++) {              //For every item of the array(= letter of the word)
        stringArray[i] = stringArray[i].charCodeAt(0);         //Turn letter into unicode
        stringArray[i] += number;                                   //Do unicode - number to apply the transition
        stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
    };
    return stringArray.join("");                                //Return string made from array.
};

// Do not edit below this line
module.exports = caesar;
