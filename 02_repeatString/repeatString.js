const repeatString = function(string, num) {
    if (num == 0) { //if num == 0
        return ""; //return an empty string (0 * a word = nothing)
    } else if (num < 0) { //if num is negative
        return "ERROR"; //return error
    } else { //if num is positive carry out the repeat function
        let repeatedString = string; //value to be printed is string once
        for (let i = 1; i < num; i++) { //add string again for each integer between 1 and num
            repeatedString += string;
        }
        return repeatedString; //print value
    }
};

// Do not edit below this line
module.exports = repeatString;
