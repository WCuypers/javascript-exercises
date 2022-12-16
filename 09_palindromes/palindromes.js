const palindromes = function (string) {
    string = string.replace(/\s+/g, ""); //removes spaces from string
    string = string.replace(/\,+/g, ""); //remove commas from string
    for (let i = 1; i < string.length / 2; i++) {
        if (string.slice(i, 1) == string.slice(-i, 1)) {
            return true;
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
