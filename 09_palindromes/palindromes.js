const palindromes = function(string) {
    string = string.replace(/\s+/g, ""); //removes spaces from string
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") //remove commas from string
    string = string.toLowerCase(); //put string in lower case
    halfLength = Math.floor(string.length / 2); //halves string length, round down
    for (let i = 0; i < halfLength; i++) {
        if (string.charAt(i) === string.charAt(string.length-1-i)) {
            console.log(string.charAt(i));
            console.log(string.charAt(string.length-1-i));
            result = true;
        } else {
            //console.log(string.charAt(i));
            //console.log(string.charAt(string.length-1-i)); //this one does not return the 2nd letter
            return false;
            break;
        };
    };
    return result
};

// Do not edit below this line
module.exports = palindromes;