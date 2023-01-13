const caesar = function(string, number) {
    let stringArray = string.split('');                         //Turn string into array
    for (let i = 0; i < stringArray.length; i++) {              //For every item of the array(= letter of the word)
        stringArray[i] = string.charCodeAt(stringArray[i]);         //Turn letter into unicode
        stringArray[i] += number;                                   //Do unicode - number to apply the transition
    };
    return stringArray;
};

// Do not edit below this line
module.exports = caesar;
