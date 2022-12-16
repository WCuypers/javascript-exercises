const fibonacci = function(index) {
    result = 1;
    for (let i = 1; i <= index; i++) {
        result += result;
        console.log(result);
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
