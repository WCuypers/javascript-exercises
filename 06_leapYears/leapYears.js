const leapYears = function(year) {
// if year % 4 === 0
// if year % 100 != 0 OR year % 400 == 0
// ^CHANGE ORDER OF THESE STATEMENTS (denk %100 eerst?)
    if(year % 100 == 0 && year % 400 != 0) {
        return false;
    } else if(year % 4 == 0) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
