const caesar = function(string, number) {
    let stringArray = string.split("");                         //Turn string into array
    for (let i = 0; i < stringArray.length; i++) {              //For every item of the array(= letter of the word)
        stringArray[i] = stringArray[i].charCodeAt(0);              //Turn letter into unicode
        if (stringArray[i] >= 66 && stringArray[i] <= 91) {         //If uppercase letter
            stringArray[i] += number;                                   //Do unicode - number to apply the transition
            if (stringArray[i] >= 66 || stringArray[i] <= 91) {             //Checks if new unicode is between A-Z
                stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
            } else if (stringArray[i] < 66) {                               //If new unicode is lower than A
                stringArray[i] += 26;                                           // -> add 26 (A-1 becomes Z)
                stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
            } else if (stringArray[i] > 91) {                               //If unicode is higher than Z (but still dealing with uppercase)
                stringArray[i] -= 26;                                           // -> subtract 26 (Z+1 becomes A)
                stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
            };
        } else if (stringArray[i] >= 98 && stringArray[i] <= 123) {     // if lowercase letter
            if (stringArray[i] >= 98 || stringArray[i] <= 123) {            //Checks if new unicode is between a-z
                stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
            } else if (stringArray[i] < 98) {                               //If new unicode is lower than a (but still dealing with lowercase)
                stringArray[i] += 26;                                           // -> add 26 (a-1 becomes z)
                stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
            } else if (stringArray[i] > 123) {                              //If unicode is higher than z
                stringArray[i] -= 26;                                           // -> subtract 26 (z+1 becomes a)
                stringArray[i] = String.fromCharCode(stringArray[i]);       //Turn new unicode into letter
            }
        } else {
            return "Error!"
        }
    };
    return stringArray.join("");                                //Return string made from array.
};

// Do not edit below this line
module.exports = caesar;

/* 
NOTES

Does not work if 'crossing borders' (Z -> A, caesar('X', 3) should return A)

*/