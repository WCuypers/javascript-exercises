const findTheOldest = function(array) {
    const currentYear = 2022;
    let age;
    let oldest;
        for (i = 0 ; i < array.length; i++) {    // for each element of the array
            array[i].age = array[i].yearOfDeath - array[i].yearOfBirth; // store result in age variable
            if (i > 0) {
                oldest = Math.max(array[i].age, array[i-1].age);
            } else {
                continue;
            }
        }
    let arrayIndex = array.find(item => item.age === oldest);
    return arrayIndex;    // return name linked to highest age variable
};

/*//FOR TESTING
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people));*/
// Do not edit below this line
module.exports = findTheOldest;
