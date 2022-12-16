const fibonacci = function(index) {
    index = +index;
    if (index < 0) {
        return "OOPS"
    } else {
        let n1 = 0, n2 = 1, nextNumber;
        for (let i = 1; i <= index; i++) {
            nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
        }
        return n1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
