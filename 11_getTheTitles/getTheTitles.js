const getTheTitles = function(bookArray) {
    let titleArray = [];
    for (let i=0; i < bookArray.length; i++){
    let item = bookArray[i];
    let test = item.title;
    titleArray.push(test);
    }
    return(titleArray);
    };

// Do not edit below this line
module.exports = getTheTitles;
